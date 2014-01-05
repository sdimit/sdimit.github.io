$("document").ready(function(){
    $(".icon").mouseover(function(){
        $("p")[1].style.color = "#35363a";
        $("p")[1].textContent = $(this).text();
    });
    $(".icon").mouseout(function(){
        $("p")[1].style.color = "yellow";
   //     $("p")[1].textContent = "";
    });
});
