<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $fileName = $_POST['fileName'];
    $res = mkdir('./../files/' . $fileName, 0777, true);
    $msg = [];
    $msg[] = $res;
    echo json_encode($msg);
}