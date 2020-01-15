<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fileupload extends Model
{
    protected $table = 'files';
       protected $fillable = [
           'filename'
       ];
}
