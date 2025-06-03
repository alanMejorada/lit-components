import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./my-header";
import "./my-pokemon";
import "./my-footer";

@customElement("my-main")
export class MyMainComponent extends LitElement {
  static styles = css`
  `;

  @property()
  header = "CAP Lit + Unitest";
  appName = "CAP Lit"

  render() {
    return html`
    <my-header .header=${this.header}></my-header>
    <my-pokemon></my-pokemon>
    <my-footer></my-footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-main": MyMainComponent;
  }
}