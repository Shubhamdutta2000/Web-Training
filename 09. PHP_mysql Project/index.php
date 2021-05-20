<?php 

    require 'config/config.php';
    require 'config/db.php';

    // fetch posts order by created_at column in descending order
    $query = 'SELECT * FROM posts ORDER BY created_at DESC';

    // get results
    $result = mysqli_query($conn, $query);
    //var_dump($result);

    // multiple ways to fetch data
    // here using mysqli and get it into an associative array
    $posts = mysqli_fetch_all($result, MYSQLI_ASSOC);
    //  var_dump($posts);

    // free the result from memory
    mysqli_free_result($result); // expects mysqli result, that is why

    // close connection 
    mysqli_close($conn);
    
?>


<?php include 'templates/header.php'; ?>

    <div class="container">
        <h1 class="pb-4 pt-5 font-weight-normal display-4">All Blogs</h1>

        <?php foreach($posts as $post) : ?>
            <div class="well">
                <h3 class="font-weight-normal">
                    <?php echo $post['title']; ?>
                </h3>
                <small>
                    <i><b>
                        Created on
                        <?php echo $post['created_at']; ?> by
                        <?php echo $post['author']; ?>
                    </i></b>
                </small>
                <br/><br/>
                <p>
                    <?php echo $post['body']; ?>
                </p>
                <a class="mb-5 btn btn-outline-primary" 
                   href="post.php?id=<?php echo $post['id']; ?>"
                >
                    Read more ...
                </a>
            <div class="mb-4 " style="background-color: #7b8ab84a; border-radius: 20%; padding: 0.8px" ></div>

            </div>
        <?php endforeach; ?>

    </div>

<?php include 'templates/footer.php'; ?>