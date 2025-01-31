<?php

use App\Http\Controllers\LookupController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', []);
});

Route::get('/lookup/{region}/{realm}/{character}/{metric}', [LookupController::class, 'index']);