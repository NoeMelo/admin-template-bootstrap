document.getElementById('toggle_id').addEventListener("click",function(){
    var w = $(window).width();
    var ob = document.getElementById("sidebar-id");
    console.log(ob.className);
    
    if (w<=600){
        if (ob.className == "app-sidebar-taggled") {
            ob.className = "app-sidebar";
        } else {
            ob.className = "app-sidebar-taggled";   
        }
    }else{
        var items = document.getElementsByClassName("menu_item_span");
        var content = document.getElementById("app-content");
        if (ob.style.width == "80px") {
            for (let item of items) {
                item.style.display="block";
            }
            ob.style.width = "230px";
            content.style.marginLeft="230px";
        }else{
            for (let item of items) {
                item.style.display="none";
            }
            ob.style.width = "80px";
            content.style.marginLeft="80px";
        }        
    }
});