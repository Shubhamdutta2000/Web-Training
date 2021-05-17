<?php 
  // msg vars for when not empty
  $msg = '';
  $msgClass = '';

  // check for submit
  if(filter_has_var(INPUT_POST, 'submit')){
    // echo 'Submitted';
    // get the form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    // check required fields
    if(!empty($email) && !empty($name) && !empty($message)){
      //passed
    //   echo 'PASSED';
      // check email
      if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
            // failed
            $msg = 'Please use a valid email';
            $msgClass = 'alert-danger';
      } else {
            // passed
            // recepient email 
            // echo 'passed';
            $toEmail = $email;
            $subject = 'Contact Request From '.$name;
            $body = '<h2>Contact Request</h2>
            <h4>Name: '.$name.'</h4>
            <h4>Email: '.$email.'</h4>
            <h4>Message: '.$message.'</h4>';
            
            // email headers
            $headers = "MIME-Version: 1.0" ."\r\n";
            $headers .= "Content-Type:text/html; charset=UTF-8" . "\r\n";
            //additional headers ... from
            $headers .= "From: ". "shubhamdutta1511@gmail.com". "\r\n";
            // mail function
            if(mail($toEmail, $subject, $body, $headers)){
                // email sent
                $msg = 'Your email has been sent';
                $msgClass = 'alert-success';
            } else {
                // email send failed
                $msg = 'Email was not sent';
                $msgClass = 'alert-danger';
            }
        }
    } else {
        //failed
        $msg = 'Please fill in all the fileds';
        $msgClass = 'alert-danger';
    }
  }
  
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Contact Us</title>
        <link rel="stylesheet" href="./bootstrap.min.css">
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="fs-3 navbar-brand" href="index.php">Contact Form</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
        <div class="container w-50">

            <?php if($msg != ''): ?>
                <div class="mt-3 alert <?php echo $msgClass; ?>">
                    <?php echo $msg; ?>
                </div>
            <?php endif; ?>

            <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                <fieldset>
                    <h1 class="mt-2 fs-1 fw-bold text-primary">Contact Form</h1>
                    <div class="form-group">
                        <label for="exampleInputName1" class="fs-4 form-label mt-4">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            class="fs-5 form-control" 
                            id="exampleInputName1" 
                            placeholder="Name"
                            value="<?php echo isset($_POST['name']) ? $name : ''; ?>"
                        >
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1" class="fs-4 form-label mt-4">Email address</label>
                        <input 
                            type="email" 
                            name="email" 
                            class="fs-5 form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" placeholder="Enter email" 
                            value="<?php echo isset($_POST['email']) ? $email : ''; ?>"
                        >
                    </div>
                    <div class="form-group">
                        <label for="exampleTextarea" class="fs-4 form-label mt-4">Message</label>
                        <textarea 
                            class="fs-5 form-control" 
                            id="exampleTextarea" 
                            rows="3"
                            name="message"
                            placeholder="Your Message"
                            value="<?php echo isset($_POST['message']) ? $message : ''; ?>"
                            style="resize:none;"
                        ></textarea>
                    </div>

                    <div class="d-grid gap-2">
                        <button type="submit" name="submit" class="mt-4 btn btn-lg btn-primary">Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
   </body>
</html>