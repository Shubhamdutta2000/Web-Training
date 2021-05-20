<?php 

    require 'config/config.php';
    require 'config/db.php';

    //////////////////////  Delete particular post data by id    ////////////////////////
    
    // Check For Delete
    if(isset($_POST['delete'])){

        // GET data from form
        $delete_id = mysqli_real_escape_string($conn, $_POST['delete_id']);

        $query = "DELETE FROM posts WHERE id='$delete_id'";

        // data is successfuly deleted from posts table then redirect to home page
        if(mysqli_query($conn, $query)) {
            echo ROOT_URL;
            header('Location: '. ROOT_URL . '');
        }else {
            echo "ERROR: ". mysqli_error($conn);
        }
    }


    ///////////////////////    for getting particular id post data   /////////////////////////
    // get id from query string
    // mysqli_real_escape_string — Escapes special characters in a string for use in an SQL statement
    $id = mysqli_real_escape_string($conn, $_GET['id']);

    // fetch posts
    $query = 'SELECT * FROM posts WHERE id = '.$id;

    // get results
    $result = mysqli_query($conn, $query);
    // var_dump($result);

    // multiple ways to fetch data
    // here using mysqli and get it into an associative array
    $post = mysqli_fetch_assoc($result);
    //  print_r($post);
    //  var_dump($posts);

    // free the result from memory
    mysqli_free_result($result); // expects mysqli result, that is why

    // close connection 
    mysqli_close($conn);

?>

<?php include 'templates/header.php'; ?>

  <div class="container">
    <a href="<?php echo ROOT_URL; ?>" class="mt-3 mb-4 btn btn-primary">Back</a>
    <h1><?php echo $post['title']; ?></h1>
      <small>
        <i><b>
          Created on
          <?php echo $post['created_at']; ?> by
          <?php echo $post['author']; ?>
        </i></b>
      </small>
      <br/>
      <br/>
      <p>
        <?php echo $post['body']; ?>
      </p>

      <div class="d-flex justify-content-between">

           <!-- For deleting particular post  -->
          <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
              <input type="hidden" name="delete_id" value="<?php echo $post['id']; ?>" />
              <input type="submit" name="delete" class="btn btn-outline-danger" value="Delete" />
          </form>

      </div>
  </div>

<?php include 'templates/footer.php'; ?>
