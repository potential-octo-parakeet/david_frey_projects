$(document).ready(function(){
    var Click = false;
    $('#mvc-tabs ul li').click(function(){       
        if(!Click){
            Click = true;
            $('#mvc-tabs div').hide();               
            $($(this).children('a').attr('href')).slideToggle();
        }else{
            $('#mvc-tabs div').hide();               
            $($(this).children('a').attr('href')).show();
        } 
        return false;     
    });
    $('#mvc-tabs ul li').dblclick(function(){
        $('#mvc-tabs div').hide();
    });
});