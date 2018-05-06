if($("#left-defaults").length == 0){
  
  //remove the play next button because we couldnt fix
  $(".ytp-next-button").remove()

  setTimeout(function(){
    console.log("jQuery shenanigans!");
    reloadPage();

  }, 3000);
}

$("body").on("click", "a", function(e){
  console.log(window.location.href);

  setTimeout(function(){
    console.log("jQuery shenanigans!");
    reloadPage();

  }, 3000);
});
