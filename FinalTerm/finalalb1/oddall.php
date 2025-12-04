<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Odd all</title>
</head>
<body>

<h1>All odd between 10 to 100</h1>

<?php

for($i=10;$i<=100;$i++){
    if($i%2 != 0){
        echo"<p>$i is odd</p>";
    }
}

?>
    
</body>
</html>