$(document).ready(function(){    
    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $(#menu).addClass('ativo');
        }else{
            $(#menu).removeClass('ativo');
        }
    })