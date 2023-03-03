<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;

class AdminQuestionController extends Controller
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

        //return view
        return inertia('Quest/Index', [
            'questions' => $questions
        ]);
    }
    
    /**
     * create
     *
     * @return void
     */
    public function create()
    {
        return inertia('Quest/Create');
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
            'code'  => 'required',
            'quest' => 'required',
            'cf_e'  => 'required',
        ]);

        //create question
        Question::create([
            'code'      => $request->code,
            'quest'     => $request->quest,
            'cf_e'      => $request->cf_e,
        ]);

        //redirect
        return redirect()->route('questions.index')->with('success', 'Data Berhasil Disimpan!');
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
            'code'      => 'required',
            'quest'     => 'required',
            'cf_e'      => 'required',
        ]);

        //update question
        $question->update([
            'code'      => $request->code,
            'quest'     => $request->quest,
            'cf_e'      => $request->cf_e,
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