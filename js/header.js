$(document).ready(function(){
    // burger menu (header.html)
    const btn = $("#btn-burger");
    console.log(btn);
    const panelMenu = $("#mobile");


    btn.on('click',function(event){
        event.preventDefault();
        panelMenu.toggleClass('open');
        $(this).toggleClass('open');
        console.log("bH ca marche!");
    });
});