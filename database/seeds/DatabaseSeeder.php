<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('users')->delete();
     
        
        factory(App\User::class, 3)->create();  
        // $this->call(UserSeeder::class);
    }
}
