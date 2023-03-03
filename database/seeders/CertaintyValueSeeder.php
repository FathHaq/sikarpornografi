<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CertaintyValueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $defines = ['Sangat yakin', 'Yakin', 'Cukup yakin', 'Kurang yakin', 'Tidak tahu', 'Tidak'];
        $value = [1.0, 0.8, 0.6, 0.4, 0.2, 0];
        foreach ($defines as $index => $define) {
            DB::table('certainty_values')->insert([
                'define' => $define,
                'cv' => $value[$index]
            ]);
        }
        
    }
}
