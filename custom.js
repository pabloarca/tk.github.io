$(document).ready(function(){
  $("#fcontacto").submit(function( event ){
    event.preventDefault();
    
    $.ajax({
      type: 'POST',
      url: 'send.php',
      data: $(this).serialize(),
      success: function(data){
        $("#respuesta").slieDown();
        $("#respuesta").html(data);
      }
    });
    return false;
  });
});

