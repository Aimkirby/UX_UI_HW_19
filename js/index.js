function fade () {
    $('.preloader').fadeOut("slow");
}
setTimeout(fade, 3000);


$("#").on("click", function(){
 console.log("You clicked on #myID");   
});

$("#").on("click", function(){
    $(".fadeMe").fadeToggle("slow");   
   });