<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Courses extends Model
{
    // to fill courses table 
    protected $fillable = [
        'name', 'path'
    ];
}
