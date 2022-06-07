<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $to = "hoskenchristopher@gmail.com";
        
        $subject = $_POST["subject"];

        $footer = $_POST['name'] . ' from ' . $_POST['email'];

        $message = $_POST["message"] . "\n\n\n" . $footer;

        echo(
            $to . "\n\n" . $subject . "\n\n" . $message
        );

        mail($to, $subject, $message);
    }
?>