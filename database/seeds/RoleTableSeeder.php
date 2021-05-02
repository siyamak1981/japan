<?php

use Illuminate\Database\Seeder;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Role::insert([
            [
                "name"=>"Developer",
                "slug"=>"developer"
            ],
            [
                "name"=>"Publisher",
                "slug"=>"publisher"
            ],
            [
                "name"=>"Editor",
                "slug"=>"editor"
            ],

            [
                'name'=>'SuperAdmin',
                "slug" =>'superadmin'
            ],
            [
                'name'=>'Admin',
                "slug" =>'admin'
            ]
        ]);
    }
}
