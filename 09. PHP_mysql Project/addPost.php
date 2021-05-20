<?php 

    require 'config/config.php';
    require 'config/db.php';

    // Check For Submit
    if(isset($_POST['submit'])){

        // GET data from form
        $title = mysqli_real_escape_string($conn, $_POST['title']);
        $body = mysqli_real_escape_string($conn, $_POST['body']);
        $author = mysqli_real_escape_string($conn, $_POST['author']);

        echo $title;
        $query = "INSERT INTO posts(title, author, body) VALUES('$title', '$author', '$body')";

        // data is successfuly added to posts table then redirect to home page
        if(mysqli_query($conn, $query)) {
            echo ROOT_URL;
            header('Location: '. ROOT_URL . '');
        }else {
            echo "ERROR: ". mysqli_error($conn);
        }

    }

?>

<?php include 'templates/header.php'; ?>

    <div class="container">
        <h1 class=" pt-5 font-weight-normal display-4">Add Blog Post</h1>
        <form class="p-5" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
            <fieldset>
                <div class="form-group">
                    <label for="title" class="form-label mt-4">Title</label>
                    <input type="text" name="title" class="form-control" id="title" placeholder="Title">
                </div>
                <div class="form-group">
                    <label for="author" class="form-label mt-4">Author</label>
                    <input name="author" type="text" class="form-control" id="author" placeholder="Author">
                </div>
                <div class="form-group">
                    <label for="exampleTextarea" class="form-label mt-4">Body</label>
                    <textarea name="body" class="form-control" id="exampleTextarea" rows="3"></textarea>
                </div>
                <button type="submit" name="submit" class="mt-3 btn btn-primary">Submit</button>
            </fieldset>
        </form>
    </div>

<?php include 'templates/footer.php'; ?>