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
        $cvalue = CertaintyValue::all();

        $idUser = Auth::user()->id;
        $valid = UserAnswer::where(['user_id' => $idUser, 'quest_id' => $id ])->get();
        // dd($valid->toArray());

        if($valid) {
            return inertia('User/Quest', [
                'quest' => $quest,
                'cvalue' => $cvalue,
            ]);
        }

        return redirect(route('pertanyaan.edit', $id));
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

        $last = Question::latest('id')->first()->id;

        if ($request->quest_id == $last) {
            return redirect()->route('hasil.index');
        }

        // dd($request->quest_id);

        //redirect
        return redirect()->route('pertanyaan.show', $request->quest_id+1)->with('success', 'Data Berhasil Disimpan!');
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
        return redirect()->route('pertanyaan.show', $request->quest_id+1)->with('success', 'Data Berhasil Disimpan!');
    
    }
    
    /**
     * edit
     *
     * @param  mixed $question
     * @return void
     */
    public function edit($id)
    {
        $quest = Question::where('id', $id)->first();
        $cvalue = CertaintyValue::all();

        $idUser = Auth::user()->id;
        $question = UserAnswer::where(['user_id' => $idUser, 'quest_id' => $id ])->get();

        return inertia('User/Quest/Edit', [
            'question' => $question,
            'quest' => $quest,
            'cvalue' => $cvalue,
        ]);
    }
    
    /**
     * update
     *
     * @param  mixed $request
     * @param  mixed $question
     * @return void
     */
    public function update(Request $request, $id)
    {
        $question = UserAnswer::where('id', $id)->first();
        dd($question->toArray());
        //set validation
        $request->validate([
            'user_id'  => 'required',
            'quest_id' => 'required',
            'cf_h'  => 'required',
        ]);

        //update question
        $question->update([
            'cf_h'      => $request->cf_h,
        ]);

        //redirect
        return redirect()->route('pertanyaan.index')->with('success', 'Data Berhasil Diupdate!');
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
        return redirect()->route('pertanyaan.index')->with('success', 'Data Berhasil Dihapus!');
    }
}
