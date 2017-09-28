<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Auth;
use App\Customer;
use Illuminate\Http\Request;
use Input;
use Validator;
use Log;
class CustomerController extends Controller
{
    public function get()
    {
        $user = Auth::user();
        $customerList = Customer::where('user_id',$user->id)->get();
        return response()->success($customerList);
    }
     public function putCustomer(Request $request){
    	$data = $request->json()->all();
        $user = Auth::user();
        $customer = new Customer();
        $customer->name = $data["name"];
        $customer->email = $data["email"];
        if($request->has("first_name"))
            $customer->first_name = $data["first_name"];
        if($request->has("last_name"))
            $customer->last_name = $data["last_name"];
        if($request->has("currency"))
            $customer->currency = $data["currency"];
        if($request->has("account_number"))
        $customer->account_number = $data["account_number"];
        if($request->has("phone"))    
            $customer->phone = $data["phone"];
        if($request->has("fax"))       
            $customer->fax = $data["fax"];
        if($request->has("website"))
            $customer->website = $data["website"];
        if($request->has("country"))
            $customer->country = $data["country"];
        if($request->has("address"))
            $customer->address = $data["address"];
        if($request->has("postal_code"))
            $customer->postal_code = $data["postal_code"];
        if($request->has("city"))
            $customer->city = $data["city"];
        $customer->user_id = $user->id;
        $customer->save();
         return response()->success("success");
    }
    public function showCustomer(Request $request){
        $data = $request->json()->all();
        $id = $data["id"];
        $customer = Customer::find($id);
        return response()->success($customer);
    }
    public function deleteCustomer(Request $request){
        $data = $request->json()->all();
        $id = $data["id"];
        $customer = Customer::find($id);
        $customer->delete();
        return response()->success($customer);
    }
    public function updateCustomer(Request $request){
        $data = $request->json()->all();
        $id = $data["id"];
        $user = Auth::user();
        $customer = Customer::find($id);
        $customer->name = $data["name"];
        $customer->email = $data["email"];
        if($request->has("first_name"))
            $customer->first_name = $data["first_name"];
        if($request->has("last_name"))
            $customer->last_name = $data["last_name"];
        if($request->has("currency"))
            $customer->currency = $data["currency"];
        if($request->has("account_number"))
        $customer->account_number = $data["account_number"];
        if($request->has("phone"))    
            $customer->phone = $data["phone"];
        if($request->has("fax"))       
            $customer->fax = $data["fax"];
        if($request->has("website"))
            $customer->website = $data["website"];
        if($request->has("country"))
            $customer->country = $data["country"];
        if($request->has("address"))
            $customer->address = $data["address"];
        if($request->has("postal_code"))
            $customer->postal_code = $data["postal_code"];
        if($request->has("city"))
            $customer->city = $data["city"];
        $customer->user_id = $user->id;
        $customer->save();
        return response()->success("success");
    }
}
