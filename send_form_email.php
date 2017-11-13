<?php
if(isset($_POST['email'])) {
 
 
    function died($error,$server_error) {
        // your error code can go here
        echo "I am very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br /><br /><br />";
        /*echo "Please go back and fix these errors.<br /><br />"*/
        if ($server_error == true){

            die();
        }
    }
    
    $server_error = false;
 
    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email'])) {
        $server_error = true;
        died('There appears to be an error from our side, kindly go back and resubmit.');       
    }
 
     
 
    $name = $_POST['name']; // required
    $email = $_POST['email']; // required
    $subject = $_POST['subject']; // not required
    $message = $_POST['message']; // required
    
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  /* if(!preg_match($email_exp,$email)) {
    $error_message .= 'The Email Address you entered does not appear to be valid. if it was entered invalid intentionaly then you can igonre this, otherwise please go back and fix it if you are expecting a reply to it.<br />';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$name)) {
    $error_message .= 'The Name you entered does not appear to be valid. if it was entered invalid intentionaly then you can igonre this, otherwise please go back and fix it if you are expecting a reply.<br />';
  }
   
  if(strlen($error_message) > 0) {
    died($error_message);
  }
  */
 
    $email_message = "Your Form Message Details:\n\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
     // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "amjadmajed992@gmail.com";
    $email_subject = "Your Form Message titled : ".$subject;

    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email)."\n\n\n\n\n\n";
    $email_message .= "Subject: ".clean_string($subject)."\n\n\n\n\n\n\n\n\n";
    $email_message .= "Message: ".clean_string($message)."\n";
 
// create email headers
$headers = 'From: '.$email."\r\n".
'Reply-To: '.$email."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
    
    
?>


 
<!-- include your own success html here -->
<br><br><br>


    <h1 style="style=text-align: center;"> Thank you for contacting me. I will be in touch with you very soon. </h1>
    <br><br>
    <h5> you will be redirected automatically in 5 seconds. if your browser doesn't support automatic redirecting then you can click<a href="http://amjadmajed.me"> here </a>  </h5>


 


<?php
header( "refresh:5;url=http://amjadmajed.me" );
die();

}
?>