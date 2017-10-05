<?php

use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('settings')->insert([
            [
                'id' => 1,
                'name' => 'Fulltime Job Salary',
                'keyword' => 'fulltime_job_salary',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ], [
                'id' => 2,
                'name' => 'Fulltime Job Hours',
                'keyword' => 'fulltime_job_hours',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ], [
                'id' => 3,
                'name' => 'Fulltime Job Salary',
                'keyword' => 'fulltime_job_salary',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'id' => 4,
                'name' => 'Freelance Job Salary',
                'keyword' => 'freelance_job_salary',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'id' => 5,
                'name' => 'Number of freelance hours per weekday',
                'keyword' => 'number_hours_freelance_weekday',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'id' => 6,
                'name' => 'Number of freelance hours per weekend',
                'keyword' => 'number_hours_freelance_weekend',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'id' => 7,
                'name' => 'Opening Proposal',
                'keyword' => 'opening_proposal',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'id' => 8,
                'name' => 'Closing Proposal',
                'keyword' => 'closing_proposal',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'id' => 9,
                'name' => 'Currency Use',
                'keyword' => 'currency',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'id'=>10,
                'name'=>'Logo',
                'keyword' => 'logo',
                'created_at'=> \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'id'=>11,
                'name'=>'Business Name',
                'keyword' => 'business_name',
                'created_at'=> \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'id'=>12,
                'name'=>'Business Address 1',
                'keyword'=>'business_address_1',
                'created_at'=> \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
            ],
            [
                'id'=>13,
                'name'=>'Business Address City',
                'keyword'=>'business_address_city',
                'created_at'=> \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
            ],
            [
                'id'=>14,
                'name'=>'Business Address Country',
                'keyword'=>'business_address_country',
                'created_at'=> \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
            ],
            [
                'id'=>15,
                'name'=>'Business Address Contact',
                'keyword'=>'business_address_contact',
                'created_at'=> \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
            ]


        ]);
    }
}
