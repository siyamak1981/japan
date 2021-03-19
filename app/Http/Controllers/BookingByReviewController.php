<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookingByReviewShowResource;
use App\Models\Booking;
use Illuminate\Http\Request;

class BookingByReviewController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke($reviewKey, Request $request)
    {
        $booking = Booking::findByReviewkey($reviewKey);
        return $booking ? new BookingByReviewShowResource($booking) : abort(404);
    }
}
