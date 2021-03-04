$(function() {
    var jogador = 1;
    var jogadorVencedor = "";
    var nomeJogador;
    var qtdJogadas = 0;

    function colunasIguais (a, b, c) {
        var backgroundA = $("#coluna"+a).css("background-image");
        var backgroundB = $("#coluna"+b).css("background-image");
        var backgroundC = $("#coluna"+c).css("background-image");

        if ((backgroundA == backgroundB) && (backgroundB == backgroundC) && (backgroundA != "none" && backgroundA != "")) {
            if (backgroundA.indexOf("1.png") >= 0) {
                jogadorVencedor = "1";
                nomeJogador = $("#Jogador01").val();
            } else {
                jogadorVencedor = "2";
                nomeJogador = $("#Jogador02").val();
            }
            return true;
        } else {
    }
            return false;
        }

    function verificarFimDeJogo() {
        
        qtdJogadas++;

        if (colunasIguais(1, 2 ,3) || colunasIguais(4, 5, 6) || colunasIguais(7, 8, 9) ||
            colunasIguais(1, 4, 7) || colunasIguais(2, 5, 8) || colunasIguais(3, 6, 9) ||
            colunasIguais(1, 5, 9) || colunasIguais(3, 5, 7)
        ) {
            $("#resultado").html("<h2>O Player " + nomeJogador + " ganhou!</h2>");
            $(".coluna").off("click");
            var image = document.createElement("IMG");
            image.src = jogadorVencedor + ".png";
            $("#imagem").html(image); 

        }if(qtdJogadas == 9){
            $("#resultado").html("<h2>Empate</h2>");
            $(".coluna").off("click"); 
        }
    }

    $(".coluna").click(function(){
        var bg = $(this).css("background-image");
        if (bg == "none" || bg == "") {
            var fig = "url(" + jogador.toString() + ".png)";
            $(this).css("background", fig);
            jogador = (jogador == 1 ? 2 : 1);
            verificarFimDeJogo();
        }
    });

});