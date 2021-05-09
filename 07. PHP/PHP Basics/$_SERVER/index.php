<?php include 'serverInfo.php'; ?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>System Info</title>
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css"> 
</head>

<body>
   <div class="container"> 

        <h2 class="mt-4">Server & File Info</h2>
            <ul class="list-group mt-3">
                <?php if($server): ?>
                        <?php foreach($server as $key => $value): ?>
                                <li class="list-group-item">
                                    <strong><?php echo $key; ?>: </strong>
                                    <?php echo $value; ?>
                                </li>
                        <?php endforeach; ?>
                <?php endif; ?>
            </ul>
         
        <h1 class="mt-4">Client Info</h1>
            <ul class="list-group mt-3">
                <?php if($client): ?>
                        <?php foreach($client as $key => $value): ?>
                            <li class="list-group-item">
                                <strong><?php echo $key; ?>: </strong>
                                <?php echo $value; ?>
                            </li>
                        <?php endforeach; ?>
                <?php endif; ?>
            </ul>
    </div>
</body>
</html>