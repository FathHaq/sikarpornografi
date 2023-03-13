<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Question;
use App\Models\Result;
use App\Models\UserAnswer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ResultController extends Controller
{    
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        //get all results
        $results = Result::get();

        //return view
        return inertia('Admin/Result/Index', [
            'results' => $results
        ]);
    }
    
    /**
     * create
     *
     * @return void
     */
    public function create()
    {
        return inertia('Admin/Result/Create');
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
            'code'      => 'required',
            'result'    => 'required',
            'solution'  => 'required',
            'cf_value'  => 'required',
        ]);

        //create result
        Result::create([
            'code'      => $request->code,
            'result'    => $request->result,
            'solution'  => $request->solution,
            'cf_value'  => $request->cf_value,
        ]);

        //redirect
        return redirect()->route('results.index')->with('success', 'Data Berresults Disimpan!');
    }
    
    /**
     * edit
     *
     * @param  mixed $result
     * @return void
     */
    public function edit(Result $result)
    {
        // $result = Result::where('id', $id)->get();

        return inertia('Admin/Result/Edit', [
            'results' => $result,
        ]);
    }
    
    /**
     * update
     *
     * @param  mixed $request
     * @param  mixed $result
     * @return void
     */
    public function update(Request $request, Result $result)
    {
        //set validation
        $request->validate([
            'code'      => 'required',
            'result'    => 'required',
            'solution'  => 'required',
            'cf_value'  => 'required',
        ]);

        //update result
        $result->update([
            'code'      => $request->code,
            'result'    => $request->result,
            'solution'  => $request->solution,
            'cf_value'  => $request->cf_value,
        ]);

        //redirect
        return redirect()->route('results.index')->with('success', 'Data Berresults Diupdate!');
    }
    
    /**
     * destroy
     *
     * @param  mixed $result
     * @return void
     */
    public function destroy(Result $result)
    {
        //delete result
        $result->delete();

        //redirect
        return redirect()->route('results.index')->with('success', 'Data Berresults Dihapus!');
    }
}
