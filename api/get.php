<?php 
    $arrFiles = array();
if($_SERVER['REQUEST_METHOD'] == 'GET'){  
    if(isset($_GET["path"]) && $_GET["path"] != ''){
        $path = $_GET["path"];
        $handle = opendir("./../files/$path");
        $files = getFiles($handle);
        $files[] = 'up';
        echo json_encode($files);
    } else{
        $handle = opendir("./../files");
        $files = getFiles($handle);
        echo json_encode($files);
    }
}

function getFiles ($path) {
    if ($path) {
        while (($entry = readdir($path)) !== FALSE) {
            $arrFiles[] = $entry;
        }
    }
    array_shift($arrFiles);
    array_shift($arrFiles);
    closedir($path);
    return $arrFiles;
}