<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bookable;
use App\Models\Booking;
use App\Models\Address;

class CheckoutController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $data = $request->validate([
            "bookings" => "required|array|min:1",
            "bookings.*.bookable_id" => "required|exists:bookables,id",
            "bookings.*.from" => "required |date|after_or_equal:today",
            "bookings.*.to" => "required |date|after_or_equal:booking.*.from",
            "customer.first_name" => "required|min:2",
            "customer.last_name" => "required|min:2",
            "customer.email" => "required|email",
            "customer.city" => "required|min:2",
            "customer.state" => "required|min:2",
            "customer.country" => "required|min:2",
            "customer.zip" => "required|min:2",
            "customer.street" => "required|min:2",
        ]);

        $data = array_merge($data, $request->validate([
            "bookings.*" => ["required", function ($attribute, $value, $fail) {
                $bookable = Bookable::findOrFail($value['bookable_id']);
                if (!$bookable->availableFor($value['from'], $value['to'])) {
                    $fail("The object is not available in given dates");
                }
            }],
        ]));

        $bookingData = $data['bookings'];
        $addressData = $data['customer'];
        $bookings = collect($bookingData)->map(function ($bookingData) use ($addressData) {
            $bookable = Bookable::findOrFail($bookingData['bookable_id']);
            $booking = new Booking();
            $booking->from = $bookingData['from'];
            $booking->to = $bookingData['to'];
            $booking->price = $bookable->priceFor($booking->from, $booking->to)['total'];
            $booking->bookable()->associate($bookable);
            $booking->address()->associate(Address::create($addressData));
            $booking->save();
            return $booking;
        });
        return $bookings;
    }
}
