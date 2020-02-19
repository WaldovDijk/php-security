<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form action="index.php" method="POST">
      <input  name="input1" />
      <input  name="input2" />
      <input  name="input3" />
      <input  name="input4" />
      <button type="submit">Submit</button>
    </form>
  </body>
</html>


<?php
$input1 =  $_POST['input1']; 
$input2 =  $_POST['input2']; 
$input3 =  $_POST['input3']; 
$input4 =  $_POST['input4']; 

for($i = 1; $i < 5; $i++){
    //
    if(${'input'. $i}){    
        ${'var_'. $i} = "true";
    } else {
        ${'var_'. $i} = 'false';
    }
    //
    if(isset(${'input'. $i})){
        ${'issetVar_'. $i} = "true";
    } else {
        ${'issetVar_'. $i} = "false";
    }
    //
    if(!empty(${'input'. $i})){
        ${'emptyVar_'. $i} = "true";
    } else {
        ${'emptyVar_'. $i} = "false";
    }
    //
    if(strlen(${'input'. $i}) != 0){
        ${'strlenVar_'. $i} = "true";
    } else {
        ${'strlenVar_'. $i} = "false";
    }
    //
    if(is_numeric(${'input'. $i})){
        ${'numericVar_'. $i} = "true";
    } else {
        ${'numericVar_'. $i} = "false";
    }
    //
    if(ctype_digit(${'input'. $i})){
        ${'ctypeVar_'. $i} = "true";
    } else {
        ${'ctypeVar_'. $i} = "false";
    }
    //
    if(is_bool(${'input'. $i})){
        ${'boolVar_'. $i} = "true";
    } else {
        ${'boolVar_'. $i} = "false";
    }
    //
    if(is_null(${'input'. $i})){
        ${'nullVar_'. $i} = "true";
    } else {
        ${'nullVar_'. $i} = "false";
    }
    //
    if(is_float(${'input'. $i})){
        ${'floatVar_'. $i} = "true";
    } else {
        ${'floatVar_'. $i} = "false";
    }
    //
    if(is_int(${'input'. $i})){
        ${'intVar_'. $i} = "true";
    } else {
        ${'intVar_'. $i} = "false";
    }
    //
    if(is_string(${'input'. $i})){
        ${'stringVar_'. $i} = "true";
    } else {
        ${'stringVar_'. $i} = "false";
    }
    //
    if(is_object(${'input'. $i})){
        ${'objectVar_'. $i} = "true";
    } else {
        ${'objectVar_'. $i} = "false";
    }
    //
    if(is_array(${'input'. $i})){
        ${'arrayVar_'. $i} = "true";
    } else {
        ${'arrayVar_'. $i} = "false";
    }
}


echo '
<html>
    <body>
        <ul>
            <li> Data: '. $input1 .' '. $input2 .' '. $input3 .' '. $input4 .'</li>
            <li> Data: '. $var_1.' '. $var_2 .' '. $var_3 .' '. $var_4 .'</li>
            <li> Data: '. $issetVar_1 .' '. $issetVar_2 .' '. $issetVar_3 .' '. $issetVar_4 .'</li>
            <li> Data: '. $emptyVar_1 .' '. $emptyVar_2 .' '. $emptyVar_3 .' '. $emptyVar_4 .'</li>
            <li> Data: '. $strlenVar_1 .' '. $strlenVar_2 .' '. $strlenVar_3 .' '. $strlenVar_4 .'</li>
            <li> Data: '. $numericVar_1 .' '. $numericVar_2 .' '. $numericVar_3 .' '. $numericVar_4 .'</li>
            <li> Data: '. $boolVar_1 .' '. $boolVar_2 .' '. $boolVar_3 .' '. $boolVar_4 .'</li>
            <li> Data: '. $nullVar_1 .' '. $nullVar_2 .' '. $nullVar_3 .' '. $nullVar_4 .'</li>
            <li> Data: '. $floatVar_1 .' '. $floatVar_2 .' '. $floatVar_3 .' '. $floatVar_4 .'</li>
            <li> Data: '. $intVar_1 .' '. $intVar_2 .' '. $intVar_3 .' '. $intVar_4 .'</li>
            <li> Data: '. $stringVar_1 .' '. $stringVar_2 .' '. $stringVar_3 .' '. $stringVar_4 .'</li>
            <li> Data: '. $objectVar_1 .' '. $objectVar_2 .' '. $objectVar_3 .' '. $objectVar_4 .'</li>
            <li> Data: '. $arrayVar_1 .' '. $arrayVar_2 .' '. $arrayVar_3 .' '. $arrayVar_4 .'</li>
        </ul>
    </body>
</html>';
?>