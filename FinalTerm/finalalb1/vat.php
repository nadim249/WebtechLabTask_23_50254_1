<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vat</title>
</head>
<body>
    <h1>VAT (Value Added Tax) </h1>
    <?php

    $price= 1200;
    $vat = $price*.15;

    echo"<h4>Vat of $price is $vat</h4>";

    ?>
</body>
</html>