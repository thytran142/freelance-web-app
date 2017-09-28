<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customer', function (Blueprint $table) {
            $table->increments('id');
            $table->string("name");
            $table->string("email");
            $table->string("first_name");
            $table->string("last_name");
            $table->string("currency");
            $table->string("account_number");
            $table->string("phone");
            $table->string("fax");
            $table->string("website");
            $table->string("country");
            $table->string("address");
            $table->string("postal_code");
            $table->string("city");
            $table->string("user_id");
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
        Schema::drop('customer');
    }
    
}
