export default class Pokemon {

    constructor({name, sprites}) {
        this.name = name;
        this.sprites = sprites;
        this.$pokemonImage = document.getElementById('pokemon-image');
        this.$pokemonName = document.getElementById('pokemon-name');
        this.render();
    }

    buildImage() {
        return `
            <img class="pokemon-picture" id="pokemon-picture" src="${this.sprites.front_default}" alt="${this.name}">    
        `;
    }

    buildName() {
        return `
            <h3 class="pokemon-name" id="pokemon-name">${this.name}</h3>
        `;
    }

    render() {
        this.$pokemonImage.innerHTML = this.buildImage();
        this.$pokemonName.innerHTML = this.buildName();
    }
}