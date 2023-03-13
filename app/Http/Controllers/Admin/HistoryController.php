<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Question;
use App\Models\Result;
use App\Models\UserAnswer;
use App\Models\UserResult;
use Illuminate\Http\Request;

class HistoryController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $results = UserResult::with('user', 'result')->get();

    return inertia('Admin/History/Index', [
      'results' => $results,
    ]);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    $answers = UserAnswer::with('quest','user')->where('user_id', $id)->get();
    $expertValues = Question::all();
    $result = UserResult::with('result')->where('user_id', $answers[0]->user->id)->first();

    $cfHE = [];
    $cfHEcombine = [];
    $cfCombine = 0;
    // $indicator= [];
    // $cek = (0.30074685975273 + null) * (1 - 0.30074685975273);

    foreach ($answers as $index => $answer) {
      $data = $answer->cf_h * $expertValues[$index]->cf_e;
      array_push($cfHE, $data);
    }

    foreach ($cfHE as $index => $value) {

      // Rumus yang ada di youtube ->

      if ($index == 0) {
        $cfCombine = $value + $cfHE[$index + 1] * (1 - $value);
        array_push($cfHEcombine, $cfCombine);
      } else if ($index < count($cfHE)-1) {
        $cfCombine = $cfCombine + $cfHE[$index+1] * (1 - $cfCombine);
        array_push($cfHEcombine, $cfCombine);
      }

      // Rumus dengan hasil yang gw mau ->

      // if ($index == 0) {
      //   $cfCombine = ($value + $cfHE[$index + 1]) * (1 - $value);
      //   array_push($cfHEcombine, $cfCombine);
      // } else if ($index < count($cfHE)-1) {
      //   $cfCombine = ($cfCombine + ($cfHE[$index+1] ?? null)) * (1 - $cfCombine);
      //   array_push($cfHEcombine, $cfCombine);
      // }
    }
    // dd($cek);
    // dd($indicator);
    // dd($answers->toArray());
    // dd($answer->toArray());
    // dd($cfHE);
    // dd($cfHEcombine);
    // dd($cfCombine);

    return inertia('Admin/History/Show', [
      'answers'       => $answers,
      'expertValues'  => $expertValues,
      'cfHE'          => $cfHE,
      'cfHEcombine'   => $cfHEcombine,
      'cfCombine'     => $cfCombine,
      'result'        => $result
    ]);
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    //
  }
}
