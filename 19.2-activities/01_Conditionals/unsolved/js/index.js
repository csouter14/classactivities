$('.tab').on("click", function(){
 
  if ($(this).hasclass("tab1")) {
    $(".tab1").addclass("active");
    $(".tab2").removeclass("active");
    $("#tabcontent1").css("display", "block");
    $("#tabcontent2").css("display", "none");
    console.log("tab 1 was clicked");

  }
  else if ($(this).hasclass("tab1")){
    $(".tab2").addclass("active");
    $(".tab1").removeclass("active");
    $("#tabcontent2").css("display", "block");
    $("#tabcontent1").css("display", "none");
    console.log("tab 2 was clicked")
  }

});
