<?php
if($_POST["message"]){
    mail("contact@makeitclean", "You just got a new message", $_POST["message"],"From: an@email.adress");
}
?>