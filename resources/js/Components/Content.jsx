import Autosuggest from 'react-autosuggest';
import { usRealms, euRealms } from '../constants'
import { useState, useEffect } from 'react'

export const Content = () => {
  const [realmSuggestions, setRealmSuggestions] = useState([]);
  const [region, setRegion] = useState("us");
  const [realm, setRealm] = useState("");
  const [character, setCharacter] = useState("");
  const [metric, setMetric] = useState("dps");

  // Bit lazy but whatever.
  const regionSuggestions = region === "us" ? usRealms : euRealms;
  const isRealmValid = regionSuggestions.find((r) => r.name === realm);
  const isCharacterSensible = character.length > 1;

  const getRealmSuggestions = () => {
    const prefixLower = realm.trim().toLowerCase();
    const prefixLength = prefixLower.length;

    if (!prefixLength) {
      return [];
    }

    return regionSuggestions.filter(r =>
      r.name.toLowerCase().slice(0, prefixLength) === prefixLower
    );
  };

  useEffect(() => {
    setRealmSuggestions(getRealmSuggestions());
  }, [realm, region]); // Trigger when realm or region changes

  const onSuggestionsClearRequested = () => {
    setRealmSuggestions([]);
  };

  const getSuggestionValue = suggestion => suggestion.name;

  const renderSuggestion = suggestion => (
    <div>
      {suggestion.name}
    </div>
  );

  const onChange = (event, { newValue }) => {
    setRealm(newValue);
  };

  const inputProps = {
    placeholder: 'Select a realm',
    value: realm,
    onChange: onChange
  };

  const autoSuggestTheme = {
    container: 'react-autosuggest__container',
    containerOpen: 'react-autosuggest__container--open',
    input: 'react-autosuggest__input text-black',
    inputOpen: 'react-autosuggest__input--open',
    inputFocused: 'react-autosuggest__input--focused',
    suggestionsContainer: 'react-autosuggest__suggestions-container absolute z-10 bg-black',
    suggestionsContainerOpen: 'react-autosuggest__suggestions-container--open',
    suggestionsList: 'border p-2 max-h-80 overflow-y-auto',
    suggestion: 'react-autosuggest__suggestion',
    suggestionFirst: 'react-autosuggest__suggestion--first',
    suggestionHighlighted: 'react-autosuggest__suggestion--highlighted',
    sectionContainer: 'react-autosuggest__section-container',
    sectionContainerFirst: 'react-autosuggest__section-container--first',
    sectionTitle: 'react-autosuggest__section-title',
  };

  const handleRedirect = () => {
    const r = regionSuggestions.find((r) => r.name === realm);

    if (!r) {
      // Not possible unless I screwed something else up but whatever lets just check it.
      return;
    }

    const realmSlug = r.slug;
    const lowerCharacter = character.toLowerCase(); // pretty sure this doesn't matter
    window.location.href = `/lookup/${region}/${realmSlug}/${lowerCharacter}/${metric}`;
  };

  return (
    <div className="flex items-center justify-center h-screen gap-4">
      <div className="flex flex-col items-center z-10 text-white">
          <label>Region</label>
          <select value={region} onChange={(e) => setRegion(e.target.value)} className="text-black">
            <option value="US">US</option>
            <option value="EU">EU</option>
          </select>
      </div>
      <div className="flex flex-col items-center z-10 text-white">
          <label>Realm</label>
          <Autosuggest
            theme={autoSuggestTheme}
            suggestions={realmSuggestions}
            onSuggestionsFetchRequested={() => {}}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
      </div>
      <div className="flex flex-col items-center z-10 text-white">
        <label>Character</label>
        <input className='text-black' value={character} onChange={(e) => setCharacter(e.target.value)}/>
      </div>
      <div className="flex flex-col items-center z-10 text-white">
          <label>Metric</label>
          <select value={metric} onChange={(e) => setMetric(e.target.value)} className="text-black">
            <option value="dps">Damage</option>
            <option value="hps">Healing</option>
          </select>
      </div>
      <button 
        type="button" 
        className="border p-2 mt-6 z-10 text-white bg-black" 
        onClick={handleRedirect} 
        disabled={!isRealmValid || !isCharacterSensible}>
          Go!
      </button>
    </div>
  );
}

export default Content;
