var visibleText = "Show Less";
var hiddenText = "Show More";

$(document).ready(function(){
    //alert("jQuery ready!");
    //.next mean next element
    
    $(".info-box button").click(function(){
        $(this).toggleClass("visible");
        
        //example of using conditional logic
        if($(this).hasClass("visible")){
            $(this).html(visibleText);
        }else{
            $(this).html(hiddenText);
        }
        
        $(this).next().toggleClass("visible");
    });
});
