<?php
if($_POST["message"]){
    mail("contact@makeitclean.com.au", "You just got a new message", $_POST["message"],"From: contact@makeitclean.com.au");
}
?>