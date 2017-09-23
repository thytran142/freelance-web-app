<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFreelanceChannelsTabel extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('freelance_channel', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('url');
            $table->string('number_first_hour');
            $table->string('rate_first_hour_hourly');
            $table->string('rate_first_hour_fixed');
            $table->string('number_second_hour');
            $table->string('rate_second_hour_hourly');
            $table->string('rate_second_hour_fixed');
            $table->string('rate_hourly_onward');
            $table->string('rate_hourly_fixed');
            $table->string('min_charge');
            $table->string('user_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('freelance_channel');
    }
}
