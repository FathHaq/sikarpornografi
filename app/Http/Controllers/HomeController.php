<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class HomeController extends Controller
{
    public function index()
    {
        // $provinces = json_decode(Http::get('https://dev.farizdotid.com/api/daerahindonesia/provinsi'));

        return inertia('Home', [
            // 'provinsi' => $provinces->provinsi,
        ]);
    }
}
