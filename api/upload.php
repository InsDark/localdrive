<?php 
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $filePath = $_FILES['img-file']['tmp_name'];
    $fileName = $_FILES['img-file']['name'];
    $res = move_uploaded_file($filePath, "../files/$fileName");
    if($res == true){
        header('Location: ./../index.html');
    }
}