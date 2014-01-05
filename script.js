$("document").ready(function(){
    $(".icon").mouseover(function(){
        $("p")[1].textContent = $(this).text();
    });
    $(".icon").mouseout(function(){
        $("p")[1].textContent = "";
    });
});
