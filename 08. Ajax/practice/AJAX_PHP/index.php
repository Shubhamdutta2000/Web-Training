<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>search user</title>
  <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css">
  <script>
    function showSuggestion(str){
       if(str.length == 0){
         document.getElementById('output').innerHTML = '';
       } else {
         // ajax request
         var xmlhttp = new XMLHttpRequest();
         xmlhttp.onreadystatechange = function(){
           if(this.readyState == 4 && this.status == 200){
             document.getElementById('output').
             innerHTML = this.responseText;
           }
         }
         xmlhttp.open("GET", "suggest.php?q="+str, true);
         xmlhttp.send();
       }
    }
  </script>
</head>
<body>
  <div class="container">
    <h1>Search Users</h1>
    <form action="">
      Search User: <input type="text" class="form-control" onkeyup="showSuggestion(this.value)">
    </form>
    <p>Suggestions: <span id="output" style="font-weight: bold"></span></p>
  </div>
</body>
</html>