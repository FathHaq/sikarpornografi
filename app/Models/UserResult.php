<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserResult extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    /**
     * Get the user that owns the UserResult
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function result()
    {
        return $this->belongsTo(Result::class);
    }
}
