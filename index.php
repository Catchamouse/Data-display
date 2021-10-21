<!DOCTYPE html> 

<html lang="cs">

<head>

<title>Pracovní test</title>

<link rel="stylesheet" type="text/css" href="styles.css">

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>

<script src="https://code.jquery.com/jquery-3.6.0.js"></script>

<script src="setFileButtonText.js"></script>
<script src="highlightData.js"></script>
<script src="dragData.js"></script>

</head>

<body>

<div id="header">Pracovní test</div>

<form action="index.php" method="post" enctype="multipart/form-data">
<label class="uploadFile"> 
  <span class="filename">Vyberte soubor</span>
  <input type="file" class="inputfile" name="fileToUpload" accept=".json">
</label>

<input class="button insert_selected_file" type="submit" value="Vložte vybraný soubor" name="submit">
</form>

<?php
include 'uploadFile.php';
?>

<form action="index.php" method="post" enctype="multipart/form-data">
<input class="button remove_border" type="submit" value="Vložit data" name="insert_data">
</form>

<?php
include 'insertDataToDatabase.php';
?>

<form action="index.php" method="post" enctype="multipart/form-data">
<input class="button remove_border" type="submit" value="Zobrazit data" name="display_data">
</form>

<?php
include 'displayData.php';
?>

<!--<div id="select_data_switch">Zapnout označení celého řádku</div>-->

</body>

</html>