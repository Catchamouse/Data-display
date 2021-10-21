<?php
if(isset($_POST["display_data"])) {
$connect = new mysqli("localhost", "root", "", "work_test"); 

if ($connect -> connect_errno) {    
  echo 'Chyba připojení: ' . $connect -> connect_error;
}

$results = "SELECT id, jmeno, prijmeni, datum FROM zaznamy ORDER BY datum";

$results_num = ($results = $connect->query($results)) ? $results->num_rows:0;
	if($results_num === 0){
        echo '<div class="error_note2">Chyba, nelze nic zobrazit protože v databázi není nic uloženo.</div>';
		return false;
	}

$row_number = 1;

// Převedení dat z databáze do asociativního pole
while ($results_row = $results->fetch_assoc()) {
    $returned_results[] = array(
        'row' => $row_number,
        'id' => $results_row['id'],
        'jmeno' => $results_row['jmeno'],
        'prijmeni' => $results_row['prijmeni'],
        'datum' => $results_row['datum']
    );
    $row_number++;
}

// Zobrazení tabulky s daty na webovou stránku
echo '<table id="names_table">
        <tr>
          <th>Řádek</th>
          <th>ID</th>
          <th>Jméno</th>
          <th>Příjmení</th>
          <th>Datum</th>
        </tr>';
            
foreach($returned_results as $to_display){
    echo '
      <tr>
        <td>'.$to_display['row'].'</td>
        <td>'.$to_display['id'].'</td>
        <td>'.$to_display['jmeno'].'</td>
        <td>'.$to_display['prijmeni'].'</td>
        <td>'.$to_display['datum'].'</td>
      </tr>
    ';
}
echo '</table>
    <div id="select_controls">
    <div id="single_cell_select">Zapnuto označení po jednotlivé buňce</div>
    <button id="select_data_row_switch" class="select_data_switch">Zapnout označení celého řádku</button>
    <button id="select_data_column_switch" class="select_data_switch">Zapnout označení celého sloupce</button>
    <button id="select_data_unselect_column_switch" class="select_data_switch">Zapnout zrušení označení celého sloupce</button>
    <button id="select_data_drag_switch" class="select_data_switch">Zapnout označení tažením</button>
    <button id="select_data_unselect_drag_switch" class="select_data_switch">Zapnout zrušení označení tažením</button>
    <button id="select_data_select_all" class="select_data_switch">Označit vše</button>
    <button id="select_data_remove_all_selection" class="select_data_switch">Vymazat vše označení</button>
    </div>';
}
?>