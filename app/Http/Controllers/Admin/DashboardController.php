<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Question;
use App\Models\Result;
use App\Models\UserResult;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
  public function __invoke()
  {
    $userResult = UserResult::with('user', 'result')->get();
    $quest = Question::count();
    $result = Result::count();
    
    $responden = $userResult->count();
    $respondents = UserResult::with('user', 'result')->latest()->paginate(12);
    
    $jumlah = [
      'child' => UserResult::whereHas('user', function ($query) {
        return $query->where('old', '<=', 11);
      })->count(),
      'teen' => UserResult::whereHas('user', function ($query) {
        return $query->where([['old', '>', 11],['old', '<=', 16]]);
      })->count(),
      'oldTeen' => UserResult::whereHas('user', function ($query) {
        return $query->where([['old', '>', 16],['old', '<=', 25]]);
      })->count(),
      'adult' => UserResult::whereHas('user', function ($query) {
        return $query->where([['old', '>', 25],['old', '<=', 35]]);
      })->count(),
      'oldAdult' => UserResult::whereHas('user', function ($query) {
        return $query->where([['old', '>', 35],['old', '<=', 45]]);
      })->count(),
      'older' => UserResult::whereHas('user', function ($query) {
        return $query->where([['old', '>', 45],['old', '<=', 65]]);
      })->count(),
    ];
    
    return inertia('Admin/Dashboard', compact(
      'quest', 'responden', 'result', 'respondents', 'jumlah'
    ));
  }
}