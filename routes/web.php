<?php

use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\QuestionController as AdminQuestionController;
use App\Http\Controllers\Admin\ResultController as AdminResultController;
use App\Http\Controllers\HomeController;
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
    Route::get('/history', [AdminResultController::class, 'history'])->name('admin.history');
    // Route::resource('/history', UserResultController::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard' , DashboardController::class)->name('dashboard');
    // Route::resource('/questions', QuestionController::class);
    // Route::post('/questions/start', [QuestionController::class, 'start'])->name('question.start');
    Route::get('/questions/{id}', [QuestionController::class, 'show'])->name('questions.show');
    Route::post('/questions', [QuestionController::class, 'store'])->name('questions.store');
    // Route::get('/result', [ResultController::class, 'index'])->name('result.index');
    // Route::post('/result', [ResultController::class, 'store'])->name('result.store');
    // Route::get('/result/{id}', [ResultController::class, 'show'])->name('result.show');
    Route::get('/coba' , [QuestionController::class, 'coba']);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
