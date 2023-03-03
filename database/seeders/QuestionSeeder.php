<?php

namespace Database\Seeders;

use App\Models\Question;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $code = ['G1','G2','G3','G4','G5','G6','G7','G8','G9','G10','G11','G12'];
        $quest = [
            'Malas, enggan belajar, dan enggan bergaul', 
            'Enggan lepas dari gadgetnya',
            'Senang menyendiri terutama di kamarnya',
            'Sering tampak gugup apabila ada yang mengajaknya berkomunikasi',
            'Sulit bersosialisasi, baik dengan keluarga maupunteman temannya',
            'Mudah marah dan mudah tersinggung',
            'Mudah cemas',
            'Pelupa',
            'Sulit Berkonsentrasi',
            'Melakukan berbagai cara agar mengakses konten pornografidapat',
            '1Hampir sebagian besar pikiran dan perilaku mengarah pada hal hal yang berbau pornografi',
            'Tidak punya gairah beraktifitas'
        ];
        $value = [0.4, 0.2, 0.4, 0.6, 0.8, 0.4, 0.2, 0.4, 0.8, 0.8, 0.8, 0.6];

        for ($i=0; $i < 12; $i++) { 
            DB::table('questions')->insert([
                    'code' => $code[$i],
                    'gejala' => $quest[$i],
                    'quest' => $quest[$i],
                    'cf_e' => $value[$i]
            ]);
        }
    }
}
