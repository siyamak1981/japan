<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

    
Route::apiResource('/bookables', 'BookableController')->only(['index', 'show']);
Route::get('bookables/{bookable}/availability', 'BookableAvailabilityController')->name('bookables.availability.show');
Route::get('bookables/{bookable}/reviews', 'BookableReviewController')->name('bookables.reviews.index');