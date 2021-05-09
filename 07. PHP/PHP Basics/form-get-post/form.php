<?php include("get_post.php") ?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>get post</title>
</head>

<body>

  <form method="GET" action="form.php">
    <div>
      <label for="">Name</label><br>
      <input type="text" name="name">
    </div>
    <div>
      <label for="">Email</label><br>
      <input type="text" name="email">
    </div>
    <input type="submit" value="Submit">
  </form>

<!--This is to directly send data via query string-->
 <ul>
  <li><a href="form.php?name=Tariq">Tariq</a></li>
  <li><a href="form.php?name=Brad">Brad</a></li>
</ul>

<?php echo "{$name}'s Profile"; ?>

</body>

</html>
