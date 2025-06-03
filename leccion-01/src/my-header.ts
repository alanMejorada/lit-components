import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-header")
export class MyHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      background-color: #ff6b6b;
      color: white;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .header-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      text-align: center;
    }

    header {
      font-size: 1.8rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1rem;
      margin: 0;
      opacity: 0.9;
    }
  `;

  @property()
  header = "Valor por defecto";

  @property()
  usuario: string | null = "Alan Mejorada";

  connectedCallback(): void {
    super.connectedCallback();
    this.getUser();
  }

  render() {
    return html`
      <div class="header-container"> 
        <header>${this.header}</header> 
        <p>Bienvenido, ${this.usuario}</p>
      </div>
    `;
  }

  getUser() {
    const user = localStorage.getItem("user");
    if (user) {
      this.usuario = user;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-header": MyHeader;
  }
}
