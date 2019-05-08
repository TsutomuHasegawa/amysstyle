$(document).ready(function(){
    $('.btns a').click(function(){
        var p = $($(this).attr("href")).offset().top;
        $('html,body').animate({ scrollTop: p }, 'fast');
        return false;
    });
});