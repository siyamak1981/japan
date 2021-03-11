<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }
    
    public function bookable()
    {
        return $this->belongsTo(Bookable::class);
    }

    public function getIncrementing()
    {
        return false;
    }

    public function getKeyType()
    {
        return 'string';
    }
}
