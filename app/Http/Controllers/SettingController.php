<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Auth;
use App\UserSetting;
use App\Setting;
use Illuminate\Http\Request;
use Input;
use Validator;
use Log;
class SettingController extends Controller
{
    public function getSetting()
    {
        $user = Auth::user();
        $user_settings = UserSetting::where('user_id',$user->id)->get();
        return response()->success($user_settings);
    }
    public function saveSettingValue($setting,$user,$value){
    	$userSetting = UserSetting::where('setting_id',$setting->id)->where('user_id',$user->id)->first();
        $userSetting->value = $value;
        $userSetting->save();
    }
    public function putSetting(Request $request)
    {
        $data = $request->json()->all();
        $user = Auth::user();
        
        $setting = Setting::where('keyword','fulltime_job_salary')->first();
        $this->saveSettingValue($setting,$user,$data['fulltime_job_salary']);

        $setting = Setting::where('keyword','fulltime_job_hours')->first();
        $this->saveSettingValue($setting,$user,$data['fulltime_job_hours']);

        $setting = Setting::where('keyword','average_fulltime_job_salary')->first();
        $this->saveSettingValue($setting,$user,$data['average_fulltime_job_salary']);

        $setting = Setting::where('keyword','average_freelance_job_salary')->first();
        $this->saveSettingValue($setting,$user,$data['average_freelance_job_salary']);

        $setting = Setting::where('keyword','number_hours_freelance_weekday')->first();
        $this->saveSettingValue($setting,$user,$data['number_hours_freelance_weekday']);

        $setting = Setting::where('keyword','number_hours_freelance_weekend')->first();
        $this->saveSettingValue($setting,$user,$data['number_hours_freelance_weekend']);

        $setting = Setting::where('keyword','opening_proposal')->first();
        $this->saveSettingValue($setting,$user,$data['opening_proposal']);

        $setting = Setting::where('keyword','ending_proposal')->first();
        $this->saveSettingValue($setting,$user,$data['ending_proposal']);
        return response()->success('success');
     }
}
