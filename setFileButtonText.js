$(document).ready(function(){
$(".inputfile").change(function (e) {
  $(this).parents(".uploadFile").find(".filename").text(e.target.files[0].name);
});

});