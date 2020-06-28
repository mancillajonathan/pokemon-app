export default class Options {

    constructor({id, name}) {
        this.id = id;
        this.name = name;
        this.$buttonOptions = document.querySelector('.options');
        this.render();
    }

    buildButtons(){
        return `
            <button class="btn-options">${this.name}</button>
            <button class="btn-options">${this.name}</button>
            <button class="btn-options">${this.name}</button>
        `;
    }

    render() {
        this.$buttonOptions.innerHTML = this.buildButtons();
    }
}