
$("document").ready(function(){

//    $("td").mouseover(function(){
//        $(this).attr("style","width: 50px; height: 50px; background-color: yellow;");                   
//       
//    });

  //  $(".icon").css("height", "100px");
    
     $(".iconCenter").mouseover(function(){
     $(".icon").toggleClass("hovered");
     //         $(".icon").css("margin", "12.5px");
     
    //    $(".square").attr("style","margin: auto; width: 125px; height: 125; background-color:blue");    
//    $(this).parent().attr("style","width: 25px; height: 50px; background-color: white;");                   
               
     });
     
     $(".iconCenter").mouseout(function(){
               $(".icon").toggleClass("hovered");
     
       //   $(".icon").toggleClass("icon");
     
 //        $(".icon").css("margin", "0");
     
//     $("tr").attr("style","width: 25px; height: 25px; background-color: white;");                   
                
      });
     
    
});
