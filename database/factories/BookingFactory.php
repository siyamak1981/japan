<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Booking;
use Faker\Generator as Faker;
use Carbon\Carbon;

$factory->define(Booking::class, function (Faker $faker) {
    $from = Carbon::instance($this->faker->dateTimeBetween('-1 months', '+1 months'));
    $to = (clone $from)->addDays(random_int(0, 14));
    return [
        'from' => $from,
        'to' => $to,
        'price' => random_int(500, 2000)
    ];
});
