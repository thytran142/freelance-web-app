<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSaleInvoiceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
         Schema::create('sale_invoice', function (Blueprint $table) {
            $table->increments('id');
            $table->string("title");
            $table->string("summary");
            $table->string("logo");
            $table->string("customer_id");
            $table->string("invoice_number");
            $table->string("so_number")->nullable();
            $table->string("payment_date");
            $table->string("note");
            $table->string("footer");
            $table->string("status");
            $table->string("due_on_date");
            $table->string("send_status");
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
         Schema::drop('sale_invoice');
    }
}
