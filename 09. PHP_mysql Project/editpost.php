<?php 

    require ('config/config.php');
    require ('config/db.php');

    ///////////////   for updating the post data   ///////////// 

    // Check For Submit
    if(isset($_POST['submit'])){

        // GET data from form
        $update_id = mysqli_real_escape_string($conn, $_POST['update_id']);
        $title = mysqli_real_escape_string($conn, $_POST['title']);
        $body = mysqli_real_escape_string($conn, $_POST['body']);
        $author = mysqli_real_escape_string($conn, $_POST['author']);

        echo $title;
        $query = "UPDATE posts 
                  SET title = '$title', body = '$body', author = '$author'
                  WHERE id = '$update_id'";

        // data is successfuly added to posts table then redirect to home page
        if(mysqli_query($conn, $query)) {
            echo ROOT_URL;
            header('Location: '. ROOT_URL . '');
        }else {
            echo "ERROR: ". mysqli_error($conn);
        }
    }

    ///////////////  for getting particular post data and add to the value  of each input field ////////////
    
    // get id from query string
    $id = mysqli_real_escape_string($conn, $_GET['id']);

    // fetch post from id
    $query = 'SELECT * FROM posts WHERE id = '.$id;

    // get results
    $result = mysqli_query($conn, $query);

    // here using mysqli and get it into an associative array
    $post = mysqli_fetch_assoc($result);

    // free the result from memory
    mysqli_free_result($result);

    // close connection 
    mysqli_close($conn);


    // NOTE: Add post to the value of input field

?>

<?php include 'templates/header.php'; ?>

    <div class="container">
        <h1 class=" pt-5 font-weight-normal display-4">Edit Blog Post</h1>
        <form class="p-5" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
            <fieldset>
                <div class="form-group">
                    <label for="title" class="form-label mt-4">Title</label>
                    <input type="text" name="title" class="form-control" id="title" placeholder="Title" value="<?php echo $post['title']; ?>">
                </div>
                <div class="form-group">
                    <label for="author" class="form-label mt-4">Author</label>
                    <input name="author" type="text" class="form-control" id="author" placeholder="Author" value="<?php echo $post['author']; ?>">
                </div>
                <div class="form-group">
                    <label for="exampleTextarea" class="form-label mt-4">Body</label>
                    <textarea name="body" class="form-control" id="exampleTextarea" rows="3" ><?php echo $post['body']; ?>
                    </textarea>
                </div>

                <!-- hidden input for getting post id -->
                <input name="update_id" type="hidden" value="<?php echo $post['id']; ?>">

                <button type="submit" name="submit" class="mt-3 btn btn-primary">Submit</button>
            </fieldset>
        </form>
    </div>

<?php include 'templates/footer.php'; ?>