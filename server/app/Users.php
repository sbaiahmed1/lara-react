<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    // to fill users table 
    protected $fillable = [
        'name', 'lastName','email','password','type'
    ];
}
