$(document).ready(function(){
    var Click = false;
    var This = null;
    $('#mvc-tabs ul li').click(function(e){       
        if(!Click){
            Click = true;
            $('#mvc-tabs div').hide();               
            $($(this).children('a').attr('href')).slideToggle();
        }else{
            $('#mvc-tabs div').hide();               
            $($(this).children('a').attr('href')).show();
        } 
              
    });
});