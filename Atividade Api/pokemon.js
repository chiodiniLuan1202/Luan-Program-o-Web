const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';


const searchInput = document.querySelector('.search-input'),
    searchButton = document.querySelector('.search-button'),
    container = document.querySelector('.pokemon'),
    erroMessage =  document.querySelector('.error');

var pokeName,
    pokemon,
    carta;

function obterPokeInfo(url, name) {
    fetch(url + name)
        .then(response => response.json())
        .then(data => {
            pokemon = data;
        })
        .catch(err => console.log(err));
       
        
}

function criarCard() {
    carta = `
<div class="pokemon-info">
    <div class="pokemon-picture">
  <img id="pokemon"src="${pokemon.sprites.front_default}" alt="Sprite of ${pokemon.name}">
</div>
        <h1 class="name">Nome: ${pokemon.name}</h1>
        <h2 class="number">Nº ${pokemon.id}</h2>
        <h3 class="type">Tipo: ${pokemon.types.map(item => item.type.name).toString()}</h3>
        <h3 class="skill">Habilidades: ${pokemon.moves.map(item => +'' + item.move.name).toString()}</h3>
        <h3 class="weight">Peso: ${pokemon.weight / 10}kg</h3>
        <h3 class="height">Altura: ${pokemon.height / 10}m</h3>
    </div>
    `;

    return carta;
}

function startApp(pokeName) {
    obterPokeInfo(baseUrl, pokeName);

     

    setTimeout(function () {

        if (pokemon.detail) {
            erroMessage.style.display = 'block';
            container.style.display = 'none';
        } else {
            erroMessage.style.display = 'none';
            container.style.display = 'flex';
            container.innerHTML = criarCard();
            
        }
    });
}

searchButton.addEventListener('click', event => {
    event.preventDefault();
    pokeName = searchInput.value.toLowerCase();
    startApp(pokeName);
    
    setTimeout(() => {
        container.classList.remove('fade');
    }, 30000);
});