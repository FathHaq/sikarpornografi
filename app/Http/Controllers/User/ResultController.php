<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Question;
use App\Models\Result;
use App\Models\UserAnswer;
use App\Models\UserResult;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ResultController extends Controller
{
    public function index()
    {
        $idUser = Auth::user()->id;
        $answers = UserAnswer::where('user_id', $idUser)->get();
        $expertValues = Question::all();
        // $last = Question::latest('id')->first()->id;
        $results = Result::get();

        // $cfHE = [0.32,0.32,0.32,0.12,0.16,0.24,0.48,0.32];
        $cfHE = [];
        $cfCombine = 0;

        foreach ($answers as $index => $answer) {
            $data = $answer->cf_h * $expertValues[$index]->cf_e;
            array_push($cfHE, $data);
        }

        foreach ($cfHE as $index => $value) {
            if ($index == 0) {
                $cfCombine += $value;
            } 
            if ($index < count($cfHE)-1) {
                $cfCombine = $cfCombine + $cfHE[$index+1]*(1 - $cfCombine);
            }
        }
        // dd($cfCombine);

        return inertia('User/Congratulation', [
            'cfCombine' => $cfCombine,
            'results' => $results,
        ]);
    }

    public function show($id)
    {
        $userResult = UserResult::where('id', $id)->get();
        $solution = Result::where('id', $userResult[0]->result_id)->get();

        return inertia('User/Result', [
            'userResult' => $userResult,
            'solution' => $solution
        ]);
    }

    public function store(Request $request)
    {

        $request->validate([
            'result_id' => 'required',
            'cf_value' => 'required',
        ]);

        UserResult::create([
            'user_id' => Auth::user()->id,
            'result_id' => $request->result_id,
            'cf_value' => $request->cf_value,
        ]);

        $last = UserResult::latest()->first();

        return redirect()->route('hasil.show', $last->id);
    }
}
