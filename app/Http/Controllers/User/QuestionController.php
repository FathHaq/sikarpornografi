<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\CertaintyValue;
use App\Models\Question;
use App\Models\UserAnswer;
use App\Models\UserResult;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class QuestionController extends Controller
{    
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        //get all questions
        $questions = Question::get();
        $cvalue = DB::table('certainty_values')->get();
        

        //return view
        return inertia('Quest/Index', [
            'questions' => $questions,
            'cvalue' => $cvalue
        ]);
    }
    
    /**
     * create
     *
     * @return void
     */
    public function start()
    {
        // UserResult::create([
        //     'user_id'   => auth()->user()->id,
        //     'cf_value'  => 0,
        // ]);

        // $userResult = UserResult::latest()->first();

        return inertia('Quest/Create', [
            // 'userResult' => $userResult
        ]);
    }
    
    public function show($id)
    {
        $quest = Question::where('id', $id)->get();
        $last = Question::latest('id')->first()->id;
        $cvalue = CertaintyValue::all();

        if ($id > $last) {
            return redirect()->route('result.index');
        }

        return inertia('User/Quest', [
            'quest' => $quest,
            'cvalue' => $cvalue,
            'last' => $last,
        ]);
    }

    public function coba()
    {
        $idUser = Auth::user()->id;
        $answers = UserAnswer::where('user_id', $idUser)->get();
        $expertValues = Question::all();

        $cfHE = [];

        foreach ($answers as $index => $answer) {
            // $data = $answer->cf_h * $expertValues[$index]->cf_e;
            array_push($cfHE, $index);
        }

        dd($cfHE);

        $cfCombine = 0;


        foreach ($cfHE as $index => $value) {
            if ($index == 0) {
                $cfCombine += $value;
            } 
            if ($index < count($cfHE)-1) {
                $cfCombine = $cfCombine + $cfHE[$index+1]*(1 - $cfCombine);
            }
        }
        
        dd($cfCombine);
    }
    
    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
    public function store(Request $request)
    {

        //set validation
        $request->validate([
            'quest_id'  => 'required',
            'cf_h'      => 'required',
        ]);

        //create result
        UserAnswer::create([
            'user_id'   => auth()->user()->id,
            'quest_id'  => $request->quest_id,
            'cf_h'      => $request->cf_h,
        ]);

        //redirect
        return redirect()->route('questions.show', $request->quest_id+1)->with('success', 'Data Berhasil Disimpan!');
    }

    public function result(Request $request)
    {
        //set validation
        $request->validate([
            'quest_id'  => 'required',
            'cf_h'      => 'required',
        ]);

        //create result
        UserAnswer::create([
            'user_id'   => auth()->user()->id,
            'quest_id'  => $request->quest_id,
            'cf_h'      => $request->cf_h,
        ]);

        UserResult::create([
            'user_id'   => auth()->user()->id,
            'result_id'  => $request->quest_id,
            'cf_value'      => $request->cf_h,
        ]);

        //redirect
        return redirect()->route('questions.show', $request->quest_id+1)->with('success', 'Data Berhasil Disimpan!');
    
    }
    
    /**
     * edit
     *
     * @param  mixed $question
     * @return void
     */
    public function edit(Question $question)
    {
        return inertia('Quest/Edit', [
            'question' => $question,
        ]);
    }
    
    /**
     * update
     *
     * @param  mixed $request
     * @param  mixed $question
     * @return void
     */
    public function update(Request $request, Question $question)
    {
        //set validation
        $request->validate([
            'user_id'  => 'required',
            'quest_id' => 'required',
            'cf_h'  => 'required',
        ]);

        //update question
        $question->update([
            'user_id'   => $request->user_id,
            'quest_id'  => $request->quest_id,
            'cf_h'      => $request->cf_h,
        ]);

        //redirect
        return redirect()->route('questions.index')->with('success', 'Data Berhasil Diupdate!');
    }
    
    /**
     * destroy
     *
     * @param  mixed $question
     * @return void
     */
    public function destroy(Question $question)
    {
        //delete question
        $question->delete();

        //redirect
        return redirect()->route('questions.index')->with('success', 'Data Berhasil Dihapus!');
    }
}
