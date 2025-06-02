import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

interface IPokemon {
  name?: string;
  url?: string;
}

@customElement("my-pokemon")
export class MyPokemon extends LitElement {
  static styles = css`
    .app-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
  `;
  @property()
  pokemonResponse: IPokemon[] = [];

  getData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result: { results: IPokemon[] }) => {
        this.pokemonResponse = result.results;
      });
  };

  /*    async getResponse (){
        const response = await fetch("https://pokeapi.co/api/v2/pokemon",{
            method:"GET"
        });
        const data:IPokemon = response.json(); 
    }
*/
  constructor() {
    super();
    this.getData();
  }

  render() {
    return html`
      <div class="app-container">
        <h2>Lista de Pokemones</h2>
        <ul>
          ${this.pokemonResponse.map((item, index) => {
            return html`
              <li>
                ${index} - <strong>${item.name}</strong> -> URL: ${item.url}
              </li>
            `;
          })}
        </ul>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-pokemon": MyPokemon;
  }
}
