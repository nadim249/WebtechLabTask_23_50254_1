<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Largest Number</title>
</head>
<body>
    <h1>Largest Number among 3 numbers</h1>
    <?php
    $a=3;
    $b=5;
    $c=2;
    echo"<p>Number are $a $b $c</p>";
    if($a>$b && $a>$c){
        echo"$a is largest";
    }else if($b>$a && $b>$c){
        echo"$b is largest";
    }else{
        echo"$c is largest";
    }
    ?>
</body>
</html>