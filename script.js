$("document").ready(function(){
    $(".icon").mouseover(function(){
        $("p")[1].style.color = "#35363a";
        $("p")[1].textContent = $(this).text();
        $(".icon").css("background-size", "90%");
    });
    $(".icon").mouseout(function(){
        $("p")[1].style.color = "yellow";
        $(".icon").css("background-size", "127%");
   //     $("p")[1].textContent = "";
    });
});
