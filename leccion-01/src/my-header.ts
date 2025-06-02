import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-header")
export class MyHeader extends LitElement {
  static styles = css`
    .header {
      backgound-color: #eb4034;
    }
  `;

  @property()
  header = "Valor por defecto";
  @property()
  usuario:string | null = "Default";

  render() {
    return html`
    <div class="header"> 
    <header>${this.header}</header> 
    <p>${this.usuario}</p>
    </div>

    `;
  }

  getUser(){
    const user = localStorage.getItem("user");
    this.usuario = user;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-header": MyHeader;
  }
}