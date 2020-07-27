<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('layouts.app');
});

Auth::routes();

Route::middleware(['auth'])->group(function () {
    Route::post('/create_customeraccnt', 'CustomerMasterFileController@store');
    Route::post('/create_group_code', 'AccountGroupCodeController@store');
    Route::get('/get_account_group_codes', 'AccountGroupCodeController@getGroupCodes');
    Route::delete('/delete_group_codes/{id}', 'AccountGroupCodeController@destroy');
    Route::post('/create_usertype', 'TblUsertypeController@store');
    Route::get('/getUserTypes', 'TblUserTypeController@index');
    Route::get('/api/persons/all', 'CustomerMasterFileController@get');
    Route::get('/person/{customer_id}', 'CustomerMasterFileController@getCustomer');
    Route::post('/get_account_details', 'CustomerMasterFileController@get_account_details');
    Route::get('/getCustomers', 'CustomerMasterFileController@getCustomers');
    Route::post('/update_customeraccnt', 'CustomerMasterFileController@updateCustomer');
    Route::post('/activate_customer', 'CustomerMasterFileController@activate');
    Route::post('/import_masterfile/import', 'ItemMasterfileController@item_masterfile_import')->name('import_file');
    Route::get('/getAuthUser', function () {
        return Auth::user();
    });
});


Route::get('{any}', 'HomeController@index')->where('any', '.*');
