<?php 
if($_SERVER['REQUEST_METHOD'] == 'GET'){  
$arrFiles = array();
$handle = opendir('./../files/');
 
if ($handle) {
    while (($entry = readdir($handle)) !== FALSE) {
        $arrFiles[] = $entry;
    }
}
array_shift($arrFiles);
array_shift($arrFiles);
echo json_encode($arrFiles);
closedir($handle);
}