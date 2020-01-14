<?php
    $name = $_POST["name"];
    $email_user = $_POST["email"];
    $message = $_POST["message"];
        
    $email_from = "moayyadkayda@gmail.com";
        
    $email_subject = "New Support Submission";
        
    $email_body = "Username:". $name."\n".
                    "User Email:". $email_user."\n".
                        "User Message:". $message."\n";


    $to_email = "gettingaws@protonmail.com";
    $headers = "From:". $email_from ."\r\n";
    $headers .= "Reply-To:". $email_user ."\r\n";

    
    mail($to_email , $email_subject , $email_body , $headers);
    echo "Mail Sent";
    header("Location: contact.html");
?>