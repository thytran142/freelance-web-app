<?php

use Illuminate\Database\Seeder;

class UserSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {


        DB::table('user_setting')->insert([
            'id' => 1,
            'user_id' => 1,
            'setting_id' => 1,
            'value' => '4000',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ],
        [
            'id' => 2,
            'user_id' => 1,
            'setting_id' => 2,
            'value' => '8',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ],
        [
            'id' => 3,
            'user_id' => 1,
            'setting_id' => 3,
            'value' => '25',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ],
        [
            'id' => 4,
            'user_id' => 1,
            'setting_id' => 4,
            'value' => '25',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ],
        [
            'id' => 5,
            'user_id' => 1,
            'setting_id' => 5,
            'value' => '3',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ],
        [
            'id' => 6,
            'user_id' => 1,
            'setting_id' => 6,
            'value' => '8',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ],
        [
            'id' => 7,
            'user_id' => 1,
            'setting_id' => 7,
            'value' => '',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ],
        [
            'id' => 8,
            'user_id' => 1,
            'setting_id' => 8,
            'value' => '',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ],
        [
            'id' => 9,
            'user_id' => 1,
            'setting_id' => 9,
            'value' => '1',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ]);
    }
}

