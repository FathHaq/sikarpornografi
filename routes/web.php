<?php

use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\HistoryController as AdminHistoryController;
use App\Http\Controllers\Admin\QuestionController as AdminQuestionController;
use App\Http\Controllers\Admin\ResultController as AdminResultController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PDFController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\QuestionController;
use App\Http\Controllers\User\ResultController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/' , [HomeController::class, 'index'])->name('home');

Route::prefix('admin')->middleware(['auth', 'role:admin'])->group(function () {
    Route::get('/' , AdminDashboardController::class)->name('admin.dashboard');
    Route::resource('/questions', AdminQuestionController::class);
    Route::resource('/results', AdminResultController::class);
    Route::resource('/history', AdminHistoryController::class);
    // Route::get('/history', [AdminResultController::class, 'history'])->name('admin.history');
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard' , DashboardController::class)->name('dashboard');
    // Route::resource('/questions', QuestionController::class);
    // Route::post('/questions/start', [QuestionController::class, 'start'])->name('question.start');
    Route::resource('/pertanyaan', QuestionController::class);
    Route::get('/hasil', [ResultController::class, 'index'])->name('hasil.index');
    Route::post('/hasil', [ResultController::class, 'store'])->name('hasil.store');
    Route::get('/hasil/{id}', [ResultController::class, 'show'])->name('hasil.show');
    Route::get('/coba' , [QuestionController::class, 'coba']);
    Route::get('/download-pdf' , [PDFController::class, 'generatePDF'])->name('pdf.download');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
