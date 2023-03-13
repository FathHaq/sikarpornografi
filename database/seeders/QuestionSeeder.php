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
        $gejala = [
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
        $quest = [
            'Apakah anda sering kali merasa Malas untuk Bersosialisasi dengan Teman?', 
            'Merasa Gelisah bila tidak bawa Gedget ketika berpergian sebentar?',
            'Merasa Senang ketika Sendiri terutama di kamar?',
            'Seringkali merasa gugup apabila ada yang mengajaknya berkomunikasi',
            'Apakah anda Sulit bersosialisasi, baik dengan keluarga maupunteman temannya?',
            'Apakah anda belakangan ini anda Mudah marah dan mudah tersinggung?',
            'Sering merasa takut apabila tidak dikasih kabar yang jelas mengenai suatu hal oleh teman dekat?',
            'Apakah anda ingat persis dimana terakhir kali menaruh Kunci motor anda?',
            'Apakah anda sering terdistraksi ketika beraktifitas?',
            'Apakah anda melakukan berbagai cara agar mengakses konten pornografidapat?',
            'Apakah anda hampir sebagian besar pikiran dan perilaku mengarah pada hal hal yang berbau pornografi?',
            'Apakah anda sering merasa malas beraktifitas?'
        ];
        $value = [0.4, 0.2, 0.4, 0.6, 0.8, 0.4, 0.2, 0.4, 0.8, 0.8, 0.8, 0.6];

        for ($i=0; $i < 12; $i++) { 
            DB::table('questions')->insert([
                    'code' => $code[$i],
                    'gejala' => $gejala[$i],
                    'quest' => $quest[$i],
                    'cf_e' => $value[$i]
            ]);
        }
    }
}
