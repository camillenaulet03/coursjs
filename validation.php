<?php

$value = $_GET['query'];
$formfield = $_GET['field'];

if ($formfield == "email") {
    if (!preg_match("/\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+/", $value)) {
        echo "Adresse email invalide";
    } else {
        echo "Adresse email valide";
    }
}