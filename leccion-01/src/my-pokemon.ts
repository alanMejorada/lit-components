import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

interface IPokemon {
  name?: string;
  url?: string;
}

@customElement("my-pokemon")
export class MyPokemon extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f9f9f9;
      color: #333;
      padding: 1rem;
    }

    .app-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 1rem;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    h2 {
      text-align: center;
      color: #ff4757;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 1rem 0;
    }

    li {
      padding: 0.75rem;
      margin-bottom: 0.5rem;
      border: 1px solid #eee;
      border-radius: 5px;
      background-color: #f1f2f6;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: background-color 0.3s;
    }

    li:hover {
      background-color: #dfe4ea;
    }

    .pokemon-name {
      font-weight: bold;
      color: #2f3542;
    }

    .pokemon-url {
      font-size: 0.9rem;
      color: #57606f;
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
                <span class="pokemon-name">${index + 1}. ${item.name}</span>
                <a class="pokemon-url" href="${item.url}" target="_blank">Ver detalles</a>
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
