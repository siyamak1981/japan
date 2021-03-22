<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Bookable;
use Faker\Generator as Faker;
use Illuminate\Support\Arr;

$suffix = [
    'Villa',
    'Cheap houe',
    'Cattage',
    'Rooms',
    'Luxury Rooms',
    'Luxury House',
    'Fancy Rooms',
    'Fancy House',
    'Cheap Rooms',
    'Cheap Villa',
    'Cheap Apartman',
];


$factory->define(Bookable::class, function (Faker $faker) use ($suffix) {
    return [
        "title" => $faker->city . ' ' . Arr::random($suffix),
        "description" => $faker->text(),
        'price' =>random_int(15, 700),
    ];
});
