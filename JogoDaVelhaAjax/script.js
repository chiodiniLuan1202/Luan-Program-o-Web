 var vez = 1;
        var vencedor = "";
        var qtdJogadas = 0;

        function casasIguais(a, b, c) {
            var casaA = $("#casa" + a);
            var casaB = $("#casa" + b);
            var casaC = $("#casa" + c);
            var bgA = $("#casa" + a).css("background-image");
            var bgB = $("#casa" + b).css("background-image");
            var bgC = $("#casa" + c).css("background-image");
            if ((bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")) {
                if (bgA.indexOf("1.png") >= 0) {
                    vencedorimg = '1';
                    vencedor = $('#jogador1').val();
                } else
                    vencedorimg = '2';
                vencedor = $('#jogador2').val();
                return true;
            }
            else {
                return false;
            }
        }

        function verificarFimDeJogo() {
            qtdJogadas++;
            if (casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
                casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
                casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
            ) {
                var image = document.createElement("IMG");
                image.src = vencedorimg + ".png";
                $("#imagem").html(image);
                $("#resultado").html("<h1>O jogador " + vencedor + " venceu! </h1>");
                $(".casa").off("click");
            }
            else if (qtdJogadas >= 9) {
                $('#resultado').html("<h2>Empate</h2>");
                $(".casa").off("click");
            }


        }

        $(".casa").click(function () {
            var bg = $(this).css("background-image");
            if (bg == "none" || bg == "") {
                var fig = "url(" + vez.toString() + ".png)";
                $(this).css("background", fig);
                vez = (vez == 1 ? 2 : 1);
                verificarFimDeJogo();

            }
        });
 
 
		
          $("button").click(function(){
            $("#div1").load("http://localhost/arquivo.txt");
          });
       
        