<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('courses/all','courseController@index');

Route::get('products/{product}', function ($productId) {
    return response()->json(['productId' => "{$productId}"], 200);
});


Route::post('courses/store','courseController@store');

Route::post('users/create','usersController@store');
Route::post('users/login','usersController@login');

Route::put('products/{product}', function() {
    return  response()->json([
            'message' => 'Update success'
        ], 200);
});

Route::delete('products/{product}',function() {
    return  response()->json(null, 204);
});

Route::post('upload','FileuploadController@upload');
