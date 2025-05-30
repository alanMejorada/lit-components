import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-element")
export class MyElement extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  @property()
  name = "";

  render() {
    return html`<p>Hola, ${this.name}!</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}