import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface IChuckResponse {
  categories?: any[];
  created_at?: string;
  icon_url?: string;
  id?: string;
  updated_at?: string;
  url?: string;
  value?: string;
}

@customElement("my-element")
export class MyElement extends LitElement {
  @property()
  chuckResponse: IChuckResponse = {};

  getInfo = () => {
    fetch("https://api.chucknorris.io/jokes/random", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result: IChuckResponse) => {
        this.chuckResponse = { ...result };
      });
  };

  constructor() {
    super();
    this.getInfo();
  }

  @property()
  list = [
    {
      calificacion: 10,
      alumno: "Jorge",
    },
    {
      calificacion: 10,
      alumno: "Carlos",
    },
  ];

  @property()
  condition = true;

  render() {
    return html`
      <p>Render a list:</p>
      <ul>
        ${this.list.map((item, index) => {
          return html`
            <li>${index} | ${item.alumno} | ${item.calificacion}</li>
          `;
        })}
      </ul>
      <div class="container-chuck">
        <img src=${this.chuckResponse.icon_url} />
        <label>${this.chuckResponse.value}</label>
      </div>
    `;
  }

  static styles = css`
    .container-chuck {
      display: flex;
      align-items: center;
    }
  `;
}