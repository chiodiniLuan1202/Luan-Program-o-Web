$(function(){
    $('.coordenadas').mouseenter(function(){
        console.log('o mause entrou no retangulo');
        $('.valores').fadeIn(1000);
    });

    $('.coordenadas').mousemove(function(e){
        console.log(e.clientX, e.clientY);
        var position =$(this).offset();
        var x =e.clientX + position.left;
        var Y =e.clientY + position.top;
        $('.valores').show().html(`coordenadas x ${x} valor de y :${Y}`);

    });

    $('.coordenadas').mouseout(function(){
        console.log('O mouse saiu retangulo');
    });

    $('.coordenadas').mouseout(function(){
        $('.valores').fadeOut(1000);
   });

   


});