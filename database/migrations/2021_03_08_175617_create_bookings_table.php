<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->uuid('review_key');
            $table->date('from');
            $table->date('to');
            $table->unsignedBigInteger('bookable_id')->index();
            $table->unsignedBigInteger('price');
            $table->unsignedBigInteger('address_id')->index()->nullable();
            $table->foreign('bookable_id')->references('id')->on('bookables');
            // $table->foreign('address_id')->references('id')->on('addresses');
          
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
        Schema::dropIfExists('bookings');
      
    }
}
