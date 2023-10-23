<?php
    class User {
        public $name;
        public $date;

        public function show() 
        {
            echo $this->name, " ", $this->date;
        }
    }

    $admin = new User;
    $admin->name = "admin";
    $admin->date = 10;
    $admin->show();
?>