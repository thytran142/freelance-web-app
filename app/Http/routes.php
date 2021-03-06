<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['middleware' => ['web']], function () {
    Route::get('/', 'AngularController@serveApp');
    Route::get('/unsupported-browser', 'AngularController@unsupported');
    Route::get('user/verify/{verificationCode}', ['uses' => 'Auth\AuthController@verifyUserEmail']);
    Route::get('auth/{provider}', ['uses' => 'Auth\AuthController@redirectToProvider']);
    Route::get('auth/{provider}/callback', ['uses' => 'Auth\AuthController@handleProviderCallback']);
    Route::get('/api/authenticate/user', 'Auth\AuthController@getAuthenticatedUser');

});

$api->group(['middleware' => ['api']], function ($api) {
    $api->controller('auth', 'Auth\AuthController');

    // Password Reset Routes...
    $api->post('auth/password/email', 'Auth\PasswordResetController@sendResetLinkEmail');
    $api->get('auth/password/verify', 'Auth\PasswordResetController@verify');
    $api->post('auth/password/reset', 'Auth\PasswordResetController@reset');
    
});

$api->group(['middleware' => ['api', 'api.auth']], function ($api) {
    $api->get('users/me', 'UserController@getMe');
    $api->put('users/me', 'UserController@putMe');
    $api->get('settings/get','SettingController@getSetting');
    $api->put("settings/put",'SettingController@putSetting');
    $api->get('freelances/get','FreelanceChannelController@getFreelance');
    $api->put("freelances/put","FreelanceChannelController@putFreelance");
    $api->post("freelances/show","FreelanceChannelController@showFreelance");
    $api->post("freelances/update","FreelanceChannelController@updateFreelance");
    $api->post("freelances/delete","FreelanceChannelController@deleteFreelance");
    $api->get("customers/get","CustomerController@get");
    $api->put("customers/put","CustomerController@putCustomer");
    $api->get("countries/get","CountryController@get");
    $api->post("customers/show","CustomerController@showCustomer");
    $api->post("customers/update","CustomerController@updateCustomer");
    $api->post("customers/delete","CustomerController@deleteCustomer");
    $api->get("invoices/get-setting","InvoiceController@getSetting");

});

$api->group(['middleware' => ['api', 'api.auth', 'role:admin.super|admin.user']], function ($api) {
    $api->controller('users', 'UserController');

});
