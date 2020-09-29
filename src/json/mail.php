<?php

$form = $_REQUEST['form'];
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$country = $_REQUEST['country'];


var_dump(
    mail(
        'dmitriyschervyakov@gmail.com',
        'You have new order from '.$form,
        'Name: '.$name."\n".
        'Email: '.$email."\n".
        'Country: '.$country."\n"
    )
);