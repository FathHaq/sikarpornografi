<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Respondent extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    /**
     * Get all of the userAnswers for the Respondent
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function userAnswers()
    {
        return $this->hasMany(UserAnswer::class);
    }

    /**
     * Get all of the userAnswers for the Respondent
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function userResults()
    {
        return $this->hasMany(UserResult::class);
    }
}
