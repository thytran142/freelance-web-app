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
   
}
