$(document).ready(function() {     
    $('.card').hover(function(){     
        $(this).children('.card-hover').addClass('card-hover-blue');    
    },     
    function(){    
        $('.card-hover').removeClass('card-hover-blue');     
    });
});