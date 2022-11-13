<?php 
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $fileObject = $_POST['file'];
    // $fileName = $_POST['file'];
    // $let = [1,3,4];
    // $let[] = $_POST;
    // echo json_encode($let);
    // $newPath = explode('\\', $path);
    // array_shift($newPath);
    // array_shift($newPath);
    // $fileName = $newPath[0];
    move_uploaded_file($fileObject, '/');
    move_uploaded_file()
}