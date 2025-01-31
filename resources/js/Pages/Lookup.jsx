import ParticleBackground from "../Components/ParticleBackground";
import GearDisplay from "../Components/GearDisplay";

export default function Lookup({ latestParse }) {
    const { reportID, fightID } = latestParse;
    const logUrl = `https://www.warcraftlogs.com/reports/${reportID}?fight=${fightID}`;
    const percentile = Math.round(latestParse.percentile);

    // This is super lazy but whatever.
    let percentileColor = "#9d9d9d";
    if (percentile > 25) percentileColor = "#1eff00";
    if (percentile > 50) percentileColor = "#0070dd";
    if (percentile > 75) percentileColor = "#a335ee";
    if (percentile > 95) percentileColor = "#ff8000";

    let gearColor = "#0070dd"; // No idea what this cutoff is, just guessing.
    if (latestParse.ilvlKeyOrPatch > 620) gearColor = "#a335ee";

    const hasRing = latestParse.gear
        ? latestParse.gear.find((item) => item.id === 228411)
        : false;

    const ringText = hasRing ? "👍 Cyre's Circlet" : "👎 Cyre's Circlet";

    return (
        <>
            <ParticleBackground />
            <div className="flex items-center justify-center h-screen gap-20">
                <div className="flex-col z-10 text-white">
                    <div style={{ color: gearColor }}>
                        Gear - {latestParse.ilvlKeyOrPatch}
                    </div>
                    <GearDisplay gear={latestParse.gear} />
                </div>
                <div className="flex-col z-10 text-white">
                    <h1 className="font-extrabold underline">Character</h1>
                    <div>{latestParse.characterName}</div>
                    <div>{latestParse.server}</div>
                    <div>{latestParse.spec}</div>
                    <div>{ringText}</div>
                    <br />
                    <h1 className="font-extrabold underline">Latest Parse</h1>
                    <div>{latestParse.encounterName}</div>
                    <div
                        style={{ color: percentileColor }}
                        className="font-bold"
                    >{`${percentile}%`}</div>
                    <div>
                        🔗
                        <a
                            href={logUrl}
                            className="text-blue-500 hover:underline"
                        >
                            WCL Report
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
