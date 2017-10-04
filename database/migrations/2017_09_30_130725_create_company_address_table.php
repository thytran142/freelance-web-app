<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompanyAddressTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company_address', function (Blueprint $table) {
            $table->increments('id');
            $table->string("sale_invoice_id");
            $table->string("company_name");
            $table->string("address_line_1");
            $table->string("address_line_2");
            $table->string("city");
            $table->string("postal_code");
            $table->string("country");
            $table->string("province");
            $table->string("contact_phone");
            $table->string("fax");
            $table->string("mobile");
            $table->string("website");
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
         Schema::drop('company_address');
    }
}
