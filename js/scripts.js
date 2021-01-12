
function buttonHandler() {

}



$(document).ready(function() {
  $(".clickable").click(function() {
    var elmID = $(this).attr('id');
    console.log(elmID);

    $("#"+elmID+"-showing").toggle();
    $("#"+elmID+"-hidden").toggle();

  });
});


    /*
    if (elmID == "walrus") {
      $("#walrus-showing").toggle();
      $("#walrus-hidden").toggle();
    }
    else if (elmID == "llama") {
      $("#llama-showing").toggle();
      $("#llama-hidden").toggle();
    }
    */