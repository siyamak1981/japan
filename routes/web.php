<?php

use Illuminate\Support\Facades\Route;


// Route::get('/', function () {
//    return view('welcome');
// }); 
// Auth::routes();
// Route::get('/home', 'HomeController@index')->name('home');


// Route::get('/{any}', function () {
//     return view('home');
// })->where('any','^(?!api\/)[\/w\.-]*');
Route::any('/{any}', function () {
    return view('home');
})->where('any','.*');
