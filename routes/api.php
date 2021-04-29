<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

    
Route::apiResource('/bookables', 'BookableController')->only(['index', 'show']);
Route::get('bookables/{bookable}/availability', 'BookableAvailabilityController')->name('bookables.availability.show');
Route::get('bookables/{bookable}/reviews', 'BookableReviewController')->name('bookables.reviews.index');
Route::apiResource('/reviews', 'ReviewController')->only(['show', 'store']);
Route::get('/booking-by-review/{reviewkey}', 'BookingByReviewController')->name('booking.by-review.show');
Route::get('bookables/{bookable}/price', 'BookablePriceController')->name('bookables.price.show');
Route::post('/checkout', 'CheckoutController')->name('checkout');

Route::post('/login', 'Api\Auth\Authcontroller@login')->name('api.login'); 
Route::post('/register', 'Api\Auth\Authcontroller@register')->name('api.register'); 
Route::get('/logout', 'Api\Auth\Authcontroller@logout')->name('api.logout'); 
Route::post('/forget-password', 'Api\Auth\ForgetPasswordController@sendResetLinkEmail')->name('api.forget-password'); 
Route::post('/reset-password', 'Api\Auth\ResetPasswordController@reset')->name('api.reset-password'); 
