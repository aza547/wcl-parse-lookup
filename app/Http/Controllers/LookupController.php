<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Chirp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class LookupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($region, $realm, $character, $metric): Response 
    {
      $base = "https://www.warcraftlogs.com/v1/parses/character";
      $params = "includeCombatantInfo=true";
      $apiKey = ""; // Probably don't check this in.

      $apiResponse = Http::get("$base/$character/$realm/$region?$params&metric=$metric&api_key=$apiKey");

      if (!$apiResponse->successful()) {
        return Inertia::render('Error', []);
      }

      $apiData = $apiResponse->json();

      usort($apiData, function ($a, $b) {
        return $b['startTime'] <=> $a['startTime'];
      });

      $latestParse = $apiData[0] ?? null;

      return Inertia::render('Lookup', [
        'latestParse' => $latestParse, 
      ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }
    
    /**
     * Display the specified resource.
     */
    public function show(Chirp $chirp)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Chirp $chirp)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Chirp $chirp)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chirp $chirp)
    {
        //
    }
}
