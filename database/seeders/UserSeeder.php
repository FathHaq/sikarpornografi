<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@sikar.id',
            'password' => bcrypt('1234'),
        ]);

        $admin->assignRole('admin');

        // $user = User::create([
        //     'name' => 'User',
        //     'email' => 'user@gmail.id',
        //     'password' => bcrypt('12345678'),
        // ]);

        // $user->assignRole('user');
    }
}
