<?php
session_start();

$target_dir = "data/";

if(!isset($_SESSION["filename"])){
$_SESSION["filename"] = null;
$files = glob($target_dir.'/*'); 
   foreach($files as $file) {
     if(is_file($file))         
        unlink($file);
   }
}

if(isset($_POST["submit"])) {
  $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
  $_SESSION["filename"] = $target_file;
  $uploadOk = 1;
  $fileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

  // Kontrola, zda byl soubor vybrán
if (basename($_FILES["fileToUpload"]["name"] == null)){
  echo "<div class='error_note'>Chyba, nevybral/a jste žádný soubor.</div>";
  $_SESSION["filename"] = null;
  $uploadOk = 0;
}
// Kontrola, zda už soubor existuje
else if (file_exists($target_file)) {
  echo "<div class='error_note'>Chyba, soubor s tímto názvem je již uložen.</div>";
  $uploadOk = 0;
}

// Povolení určitého formátu souboru
if ($uploadOk != 0 && $fileType != "json") {
  echo "<div class='error_note'>Chyba, pouze JSON soubory jsou dovoleny.</div>";
  $uploadOk = 0;
}

// Kontrola, zda $uploadOk byl nastaven na 0 nějakou chybou
if ($uploadOk == 0) {
  echo "<div class='error_note2'>Bohužel, váš soubor nebyl nahrán.</div>";
} else {
  $files = glob($target_dir.'/*'); 
   foreach($files as $file) {
     if(is_file($file))         
        unlink($file); 
}
// Pokud je vše v pořádku, provede se pokus o nahrání souboru
  if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    $target_file = null;
    echo "<div class='success_note'>Soubor ". htmlspecialchars(basename( $_FILES["fileToUpload"]["name"])). " byl nahrán.</div>";
  } else {
    echo "<div class='error_note2'>Bohužel, při nahrávání souboru se vyskytla chyba.</div>";
  }
}
}
?>
