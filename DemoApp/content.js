//if($("#left-defaults").length == 0){

  //remove the play next button because we couldnt fix
  $(".ytp-next-button").remove();

  setTimeout(function(){
    console.log("jQuery shenanigans!");
    reloadPage();
  }, 500);
//}


$("body").on("click", "a", function(e){
  setTimeout(function(){
    console.log("jQuery shenanigans!");
    reloadPage();

  }, 1500);
});
