import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-footer")
export class MyFooter extends LitElement {
  static styles = css`
    .footer {
      background-color: #eb4034;
      padding: 1rem;
      text-align: center;
    }
  `;
  @property()
  appName: string = "Nombre del componente";

  render() {
    return html`
      <div class="footer">
        <p><strong>${this.appName}</strong></p>
      </div>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "my-footer": MyFooter;
  }
}
