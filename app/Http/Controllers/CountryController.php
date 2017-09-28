<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Auth;
use App\Country;
use Illuminate\Http\Request;
use Input;
use Validator;
use Log;
class CountryController extends Controller
{
    public function get()
    {
        $countries = Country::all();
        return response()->success($countries);
    }
}
