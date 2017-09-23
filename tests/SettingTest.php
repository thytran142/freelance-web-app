<?php

use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\Http\Controllers\SettingController;
class SettingTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
   // public function testTrueIsTrue(){
   // 	$foo = true;
   // 	$this->assertTrue($foo);
   // }
    public function testSettingController(){
    	$settingController = new SettingController();
    	
    }
   
}
