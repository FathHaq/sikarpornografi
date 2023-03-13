<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserResult;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PDFController extends Controller
{
    public function generatePDF()
    {
        $user = Auth::user();

        $data = array(
            'result' => UserResult::with('user', 'result')->where('user_id', 4)->first(),
            'date' => date('m/d/Y'),
        );

        // dd($data['result']->toArray());

        $pdf = Pdf::loadView('myPDF', $data);

        return $pdf->download('sistempakar.pdf');

    }
}
