<?php
if(isset($_POST["insert_data"])) {          
  $connect = new mysqli("localhost", "root", "", "work_test"); 

if ($connect -> connect_errno) {    
  echo 'Chyba připojení: ' . $connect -> connect_error;
}
  
$query = '';

// Čtení souboru JSON v PHP
if($_SESSION["filename"] != null){
$data = file_get_contents($_SESSION["filename"]); 

// Převedení JSON řetězce do PHP pole
$array = json_decode($data, true); 

// Extrahování řádek po řádku
foreach($array as $row) {
// Databázový dotaz pro vložení dat do databáze prostřednictvím vícenásobného vkládacího dotazu 
  $query .= 
  "INSERT INTO zaznamy (jmeno, prijmeni, datum) VALUES 
  ('".$row["jmeno"]."', '".$row["prijmeni"]."', '".$row["date"]."'); ";     
}

if(mysqli_multi_query($connect, $query)){
  unlink($_SESSION["filename"]);
  $_SESSION["filename"] = null;
  echo '<div class="success_note">Záznamy byly úspěšně vloženy do databáze</div>';
}
} else {
    echo '<div class="error_note2">Chyba, nenahrál/a jste žádný soubor.</div>';
}
}
?>