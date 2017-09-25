<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Auth;
use App\FreelanceChannel;
use Illuminate\Http\Request;
use Input;
use Validator;
use Log;
class FreelanceChannelController extends Controller
{
    public function getFreelance()
    {
        $user = Auth::user();
        $freelanceList = FreelanceChannel::where('user_id',$user->id)->get();
        return response()->success($freelanceList);
    }
    public function putFreelance(Request $request){
    	$data = $request->json()->all();
        $user = Auth::user();
        $freelanceChannel = new FreelanceChannel();
        $freelanceChannel->name = $data['name'];
        $freelanceChannel->url = $data['url'];
        $freelanceChannel->number_first_hour = $data['number_first_hour'];
        $freelanceChannel->rate_first_hour_hourly = $data['rate_first_hour_hourly'];
        $freelanceChannel->rate_first_hour_fixed = $data['rate_first_hour_fixed'];
        $freelanceChannel->number_second_hour = $data['number_second_hour'];
        $freelanceChannel->rate_second_hour_hourly = $data['rate_second_hour_hourly'];
        $freelanceChannel->rate_second_hour_fixed = $data['rate_second_hour_fixed'];
        $freelanceChannel->rate_hourly_onward = $data['rate_hourly_onward'];
        $freelanceChannel->rate_hourly_fixed = $data['rate_hourly_fixed'];
        $freelanceChannel->min_charge = $data['min_charge'];
        $freelanceChannel->user_id = $user->id;
        $freelanceChannel->save();
        return response()->success("success");
    }
   
}
