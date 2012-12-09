$(document).ready(function(){
    var Click = false;
    $('#mvc-tabs ul li').css({'background':'none'}).click(function(){
        $(this).css({'background':'white','color':'black !important'});
        if(!Click){
            Click = true;
            $('#mvc-tabs div').hide();               
            $($(this).children('a').attr('href')).slideToggle();
        }else{
            $('#mvc-tabs div').hide();               
            $($(this).children('a').attr('href')).show();
        } 
        return false;     
    }).dblclick(function(){
        $('#mvc-tabs div').hide();
    });
});