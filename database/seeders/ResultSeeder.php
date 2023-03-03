<?php

namespace Database\Seeders;

use App\Models\Result;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ResultSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('results')->insert([
            [
                'code' => 'K1',
                'result' => 'Rendah',
                'solution' => 'Teruskan Anak muda',
                'cf_value' => 0.4
            ],
            [
                'code' => 'K2',
                'result' => 'Sedang',
                'solution' => 'Kurang-kurangi, kasian Orang Tua mu',
                'cf_value' => 0.8
            ],
            [
                'code' => 'K3',
                'result' => 'Tinggi',
                'solution' => 'Dahlah Turu aja, dasar Otak Bokep',
                'cf_value' => 1
            ],
        ]);
    }
}
