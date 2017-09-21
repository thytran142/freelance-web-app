<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'id' => 1,
            'name' => 'admin1',
            'email' => 'thytran142@gmail.com',
            'password' => bcrypt('pwd'),
            'email_verified' => '1',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
        ]);
    }
}
