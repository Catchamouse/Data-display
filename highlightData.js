var isDragEnabled = false;
var isUnselectDragEnabled = false;

$(document).ready(function(){
var isRowSelectionEnabled = false;
var isColumnSelectionEnabled = false;
var isColumnUnselectionEnabled = false;
var numberOfColumns = 5;

$('#names_table td').click(function() {
if(isRowSelectionEnabled){
    if($(this).parent().children('.highlighted').length < numberOfColumns){
      $(this).parent().children().addClass('highlighted');
    }      
    else {          
      $(this).parent().children().removeClass('highlighted');
    }            
  }
  else if(isColumnSelectionEnabled){
      var index = $(this).index();       
            $('#names_table').find('tr').each(function() {
            $(this).find('td').eq(index).addClass('highlighted');      
          });
  }
  else if(isColumnUnselectionEnabled){
     var index = $(this).index();
     $('#names_table').find('tr').each(function() {
        $(this).find('td').eq(index).removeClass('highlighted');
        });
  }   
  else {
    if(!isDragEnabled && !isUnselectDragEnabled){     
      if(!$(this).hasClass('highlighted')){
        $(this).addClass('highlighted');
      }
      else if($(this).hasClass('highlighted')){
        $(this).removeClass('highlighted');
      }
    }
  }
});

$('#select_data_row_switch').click(function() {
  if(!isRowSelectionEnabled){
    isRowSelectionEnabled = true;
    isColumnSelectionEnabled = false;
    isColumnUnselectionEnabled = false;
    isDragEnabled = false;
    isUnselectDragEnabled = false;
    
    $(this).text("Vypnout označení celého řádku");
    $('#select_data_unselect_column_switch').text('Zapnout zrušení označení celého sloupce');
    $('#select_data_column_switch').text('Zapnout označení celého sloupce');
    $('#select_data_drag_switch').text('Zapnout označení tažením');
    $('#select_data_unselect_drag_switch').text('Zapnout zrušení označení tažením');
    
    $(this).removeClass('select_data_switch');
    $(this).addClass('select_data_switch_active');
    
    $('#select_data_unselect_column_switch, #select_data_column_switch, #select_data_drag_switch, #select_data_unselect_drag_switch').removeClass('select_data_switch_active');
    $('#select_data_unselect_column_switch, #select_data_column_switch, #select_data_drag_switch, #select_data_unselect_drag_switch').addClass('select_data_switch');
  }
  else {
    isRowSelectionEnabled = false;
    $(this).text("Zapnout označení celého řádku"); 
    $(this).removeClass('select_data_switch_active');
    $(this).addClass('select_data_switch'); 
  }
  if(isRowSelectionEnabled == true || isColumnSelectionEnabled == true || isColumnUnselectionEnabled == true || isDragEnabled == true || isUnselectDragEnabled == true){
    $('#single_cell_select').text('Vypnuto označení po jednotlivé buňce');
  }
  else{ 
    $('#single_cell_select').text('Zapnuto označení po jednotlivé buňce');
  } 
});

$('#select_data_column_switch').click(function() {
  if(!isColumnSelectionEnabled){
    isColumnSelectionEnabled = true;
    isRowSelectionEnabled = false;
    isColumnUnselectionEnabled = false;    
    isDragEnabled = false;
    isUnselectDragEnabled = false;
    
    $(this).text('Vypnout označení celého sloupce');
    $('#select_data_row_switch').text('Zapnout označení celého řádku');
    $('#select_data_unselect_column_switch').text('Zapnout zrušení označení celého sloupce');      
    $('#select_data_drag_switch').text('Zapnout označení tažením');
    $('#select_data_unselect_drag_switch').text('Zapnout zrušení označení tažením');
    
    $(this).removeClass('select_data_switch');
    $(this).addClass('select_data_switch_active');
    
    $('#select_data_row_switch, #select_data_unselect_column_switch, #select_data_drag_switch, #select_data_unselect_drag_switch').removeClass('select_data_switch_active');
    $('#select_data_row_switch, #select_data_unselect_column_switch, #select_data_drag_switch, #select_data_unselect_drag_switch').addClass('select_data_switch');
  }
  else {
    isColumnSelectionEnabled = false;
    $(this).text('Zapnout označení celého sloupce'); 
    $(this).removeClass('select_data_switch_active');
    $(this).addClass('select_data_switch'); 
  }
  if(isRowSelectionEnabled == true || isColumnSelectionEnabled == true || isColumnUnselectionEnabled == true || isDragEnabled == true || isUnselectDragEnabled == true){
    $('#single_cell_select').text('Vypnuto označení po jednotlivé buňce');
  }
  else{ 
    $('#single_cell_select').text('Zapnuto označení po jednotlivé buňce');
  } 
});

$('#select_data_unselect_column_switch').click(function() {
  if(!isColumnUnselectionEnabled){
    isColumnUnselectionEnabled = true;
    isRowSelectionEnabled = false;
    isColumnSelectionEnabled = false;    
    isDragEnabled = false;
    isUnselectDragEnabled = false;
    
    $(this).text('Vypnout zrušení označení celého sloupce');
    $('#select_data_row_switch').text('Zapnout označení celého řádku');
    $('#select_data_column_switch').text('Zapnout označení celého sloupce');      
    $('#select_data_drag_switch').text('Zapnout označení tažením');
    $('#select_data_unselect_drag_switch').text('Zapnout zrušení označení tažením');
    
    $(this).removeClass('select_data_switch');
    $(this).addClass('select_data_switch_active');
    
    $('#select_data_row_switch, #select_data_column_switch, #select_data_drag_switch, #select_data_unselect_drag_switch').removeClass('select_data_switch_active');
    $('#select_data_row_switch, #select_data_column_switch, #select_data_drag_switch, #select_data_unselect_drag_switch').addClass('select_data_switch');
  }
  else {
    isColumnUnselectionEnabled = false;
    $(this).text('Zapnout zrušení označení celého sloupce');
    $(this).removeClass('select_data_switch_active');
    $(this).addClass('select_data_switch');
  }
  if(isRowSelectionEnabled == true || isColumnSelectionEnabled == true || isColumnUnselectionEnabled == true || isDragEnabled == true || isUnselectDragEnabled == true){
    $('#single_cell_select').text('Vypnuto označení po jednotlivé buňce');
  }
  else{ 
    $('#single_cell_select').text('Zapnuto označení po jednotlivé buňce');
  } 
});

$('#select_data_drag_switch').click(function() {
   if(!isDragEnabled){
    isDragEnabled = true;
    isRowSelectionEnabled = false;
    isColumnSelectionEnabled = false;
    isColumnUnselectionEnabled = false;
    isUnselectDragEnabled = false;
        
    $(this).text('Vypnout označení tažením');
    $('#select_data_row_switch').text('Zapnout označení celého řádku');
    $('#select_data_column_switch').text('Zapnout označení celého sloupce');
    $('#select_data_unselect_column_switch').text('Zapnout zrušení označení celého sloupce');
    $('#select_data_unselect_drag_switch').text('Zapnout zrušení označení tažením');
    
    $(this).removeClass('select_data_switch');
    $(this).addClass('select_data_switch_active');
    
    $('#select_data_row_switch, #select_data_column_switch, #select_data_unselect_column_switch, #select_data_unselect_drag_switch').removeClass('select_data_switch_active');
    $('#select_data_row_switch, #select_data_column_switch, #select_data_unselect_column_switch, #select_data_unselect_drag_switch').addClass('select_data_switch');  
  }
  else {
    isDragEnabled = false;
    $(this).text('Zapnout označení tažením'); 
    $(this).removeClass('select_data_switch_active');
    $(this).addClass('select_data_switch'); 
  }
  if(isRowSelectionEnabled == true || isColumnSelectionEnabled == true || isColumnUnselectionEnabled == true || isDragEnabled == true || isUnselectDragEnabled == true){
    $('#single_cell_select').text('Vypnuto označení po jednotlivé buňce');
  }
  else{ 
    $('#single_cell_select').text('Zapnuto označení po jednotlivé buňce');
  }
});

$('#select_data_unselect_drag_switch').click(function() {
   if(!isUnselectDragEnabled){
    isUnselectDragEnabled = true;
    isRowSelectionEnabled = false;
    isColumnSelectionEnabled = false;
    isColumnUnselectionEnabled = false;
    isDragEnabled = false;
        
    $(this).text('Vypnout zrušení označení tažením');
    $('#select_data_row_switch').text('Zapnout označení celého řádku');
    $('#select_data_column_switch').text('Zapnout označení celého sloupce');
    $('#select_data_unselect_column_switch').text('Zapnout zrušení označení celého sloupce');
    $('#select_data_drag_switch').text('Zapnout označení tažením');
    
    $(this).removeClass('select_data_switch');
    $(this).addClass('select_data_switch_active');
    
    $('#select_data_row_switch, #select_data_column_switch, #select_data_unselect_column_switch, #select_data_drag_switch').removeClass('select_data_switch_active');
    $('#select_data_row_switch, #select_data_column_switch, #select_data_unselect_column_switch, #select_data_drag_switch').addClass('select_data_switch');  
  }
  else {
    isUnselectDragEnabled = false;
    $(this).text('Zapnout zrušení označení tažením'); 
    $(this).removeClass('select_data_switch_active');
    $(this).addClass('select_data_switch'); 
  }
  if(isRowSelectionEnabled == true || isColumnSelectionEnabled == true || isColumnUnselectionEnabled == true || isDragEnabled == true || isUnselectDragEnabled == true){
    $('#single_cell_select').text('Vypnuto označení po jednotlivé buňce');
  }
  else{ 
    $('#single_cell_select').text('Zapnuto označení po jednotlivé buňce');
  }
});

$('#select_data_remove_all_selection').click(function() {
  $('#names_table').find('tr').each(function() {
    $(this).find('td').removeClass('highlighted'); 
  });
});

$('#select_data_select_all').click(function() {
  $('#names_table').find('tr').each(function() {
    $(this).find('td').addClass('highlighted'); 
  });
});

});