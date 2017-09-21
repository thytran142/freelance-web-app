<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;

class SettingController extends Controller
{
    public function getSetting()
    {
        $user = Auth::user();
        $user_settings = UserSetting::where('user_id',$user->id)->get();
        return response()->success($user_settings);
    }
}
