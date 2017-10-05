<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Auth;
use App\Invoice;
use App\Setting;
use App\UserSetting;
use App\Country;
use Illuminate\Http\Request;
use Input;
use Validator;
use Log;
class InvoiceController extends Controller
{
    public function getSetting()
    {
        $user = Auth::user();
        $logoSetting = Setting::where('keyword','logo')->first();
        $logoImage = UserSetting::where('user_id',$user->id)->where('setting_id',$logoSetting->id)->first()->value;
       	$businessNameSetting = Setting::where('keyword','business_name')->first();
       	$businessName = UserSetting::where('user_id',$user->id)->where('setting_id',$businessNameSetting->id)->first()->value;
       	$businessAddress1Setting = Setting::where('keyword','business_address_1')->first();
       	$businessAddress1 = UserSetting::where('user_id',$user->id)->where('setting_id',$businessAddress1Setting->id)->first()->value;
       	$businessAddressCitySetting = Setting::where('keyword','business_address_city')->first();
       	$businessAddressCity = UserSetting::where('user_id',$user->id)->where('setting_id',$businessAddressCitySetting->id)->first()->value;
       	$businessAddressCountrySetting = Setting::where('keyword','business_address_country')->first();
       	$businessAddressCountry = UserSetting::where('user_id',$user->id)->where('setting_id',$businessAddressCountrySetting->id)->first()->value;
       	$businessCountry = Country::where('country_id',$businessAddressCountry)->first()->country_name;
       	$businessAddressContactSetting = Setting::where('keyword','business_address_contact')->first();
       	$businessAddressContact = UserSetting::where('user_id',$user->id)->where('setting_id',$businessAddressContactSetting->id)->first()->value;

        $data = [
			"logoImage" => $logoImage,
			"businessName" => $businessName,
			"businessAddress1"=>$businessAddress1,
			"businessAddressCity"=>$businessAddressCity,
			"businessAddressCountry"=>$businessCountry,
			"businessAddressContact"=>$businessAddressContact
		];
		return response()->success($data);
    }
}
