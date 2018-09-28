var url = window.location.href;
console.log(url);

$(document).ready(function(){

    $('.pt').on('click', function(){
        window.location.href = '?pt';
        idiomaPt();
    });

    $('.en').on('click', function(){
        window.location.href = '?en';
        idiomaEn();
    });

    function idiomaPt(){
        $('html').attr('lang','pt-br');
        console.log('pt')
    }

    function idiomaEn(){
        $('html').attr('lang','en');
        console.log('en')
    }

});