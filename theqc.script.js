$(document).ready(function(){
    var Click = false;
    $('#mvc-tabs ul li').click(function(){
        $('#mvc-tabs ul li a').removeAttr('style');
        $(this).children('a').css({'color':'black','background':'white'})
        if(!Click){
            Click = true;
            $('#mvc-tabs div').hide();               
            $($(this).children('a').attr('href')).slideToggle();
        }else{
            $('#mvc-tabs div').hide();               
            $($(this).children('a').attr('href')).show();
        } 
        return false;     
    })
    $('body').click(function(){
        if($(this).id!=='mvc-tabs'){            
            $('#mvc-tabs div').hide(110);
            $('#mvc-tabs ul li a').removeAttr('style');
            Click = false;
        }
    });
});