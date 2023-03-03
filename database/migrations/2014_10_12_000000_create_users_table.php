<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->integer('old')->nullable()->default(0);
            $table->enum('gender', ['Laki-laki', 'Perempuan'])->nullable();
            // $table->string('province')->nullable()->default('text');
            // $table->string('city')->nullable()->default('text');
            // $table->string('district')->nullable()->default('text');
            // $table->string('ward')->nullable()->default('text');
            $table->string('address')->nullable()->default('text');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
