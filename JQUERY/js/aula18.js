$(function(){
    const tbody = $(".table tbody");
    
    function obterDados(){
        $.ajax('https://jsonplaceholder.typicode.com/users', {
            type: 'GET',
            beforeSend: function(){
                $('.table').after('<p class="loading"> Aguarde! Carregando...</p>');
            },
            error: function(){
                $('.table').after('<p class="loading"> Deu ruim </p>');
            },
            success: function(dados){
                mostrarDados(dados);
            },
            complete: function(){
                $('.loading').remove();
            }
        })
        
        $('form').on('submit',function(e){
            e.preventDefault();
            const dados = {};

            $('form').find('input').each(function(i,el){
                dados[el.id] = el.value;
            })

            $.ajax('https://jsonplaceholder.typicode.com/users',{
                type:'POST',
                data: dados,
                success: function(_dados){
                    console.log(_dados)
                    mostrarDados([_dados])
                    alert('Sucesso !!!')

                },
                error:function(){
                    alert('Error !!')
                }
            })
        })
        
        function mostrarDados(dados){
            $.each(dados, function(i, el){
                tbody.append(`<tr class="linha">
                                <th scope="row" class="id">${el.id}</th>
                                <td class="nome">${el.name}</td>
                                <td class="username">${el.username}</td>
                                <td class="email">${el.email}</td>
                                </tr>     
                                `)

                               
                                /*<td class="endereco">Rua: ${el.address.street}, Apartamento: ${el.address.suite}, Código Postal: ${el.address.zipcode}, Latitude: ${el.address.geo.lat} | Longitude: ${el.address.geo.lng}</td>
                                <td class="phone">${el.phone}</td>
                                <td class="site">${el.website}</td>
                                <td class="company">Nome Companhia: ${el.company.name}, CatchPhrase: ${el.company.catchPhrase}</td>
                                    <tr>
                                </td>*/
                 
            })
        }
    }
    obterDados();
    tbody.on('click', (e) => {    
        $linha = $(e.target).closest(".linha");
        $("#name").val($linha.children(".nome").text());
        $("#username").val($linha.children(".username").text());
        $("#email").val($linha.children(".email").text());
        $("#endereco").val($linha.children(".endereco").text());
        $("#phone").val($linha.children(".phone").text());
        $("#site").val($linha.children(".site").text());
        $("#company").val($linha.children(".company").text());
    })
})