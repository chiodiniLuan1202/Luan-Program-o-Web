$(function(){
    $(".coordenadas").mouseenter(function(){
       console.log("O mouse entrou no retangulo" );
       $(".valores").fadeIn();
       //$(this).hide(); 
    });

    $(".coordenadas").mousemove(function(e){
        console.log(e.clienteX, e.clienteY);
        var posicoes = $(this).offset();
        var x = e.clientX - posicoes.left;
        var y = e.clientY - posicoes.top;
        $(".valores").html(`coodernadas x: ${x} e y: ${y}`);
    });

    $(".coordenadas").mouseout(function(){
        console.log("mouse saiu da area do retangulo");   
        $(".valores").fadeOut();
    });

});