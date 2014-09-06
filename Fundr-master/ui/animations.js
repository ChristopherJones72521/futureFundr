$("#Nav").click(function(){
    var navmenu = $("#NavMenu");
    
    if (navmenu.css("margin-left") == '-200px'){
        
        navmenu.animate({
            "margin-left":"0px"
        },500);
    }else{
        navmenu.animate({
            "margin-left":"-200px"
        },500);
    }
});