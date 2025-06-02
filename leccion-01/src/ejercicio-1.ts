import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("login-element")
export class Login extends LitElement {
  static styles = css`
    .home {
      height: 100vh;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: #d92929;
    }

    .contenedor {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: #fafafa;
      border-radius: 20px;
      padding: 50px;
      gap: 10px;
    }

    .inputs {
      justify-content: space-between;
    }
  `;

  @property({ type: String })
  user = "";

  @property({ type: String })
  password = "";

  render() {
    return html`
      <div class="home">
        <div class="contenedor">
          <h1>LOGIN</h1>
          <div class="inputs">
            <div>
              <label>Usuario</label>
              <input
                class="input"
                type="text"
                name="username"
                .value=${this.user}
                @input=${this.handleInput}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                class="input"
                type="password"
                name="password"
                .value=${this.password}
                @input=${this.handleInput}
              />
            </div>
          </div>

          <button @click=${this.validateData}>Iniciar sesión</button>
        </div>
      </div>
    `;
  }

  private handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.name === "username") {
      this.user = target.value;
    } else if (target.name === "password") {
      this.password = target.value;
    }
  }

  private validateData() {
    const userStorage = localStorage.getItem("user");
    const passwordStorage = localStorage.getItem("password");
    if (userStorage === this.user && passwordStorage === this.password) {
      window.alert("Has ingresado! :D");
      
    } else if (!userStorage || !passwordStorage) {
      window.alert("Datos nulos en Local Storage");
    } else if(!this.user || !this.password){
        window.alert("Llena los campos")
    }else {
      window.alert("Credenciales incorrectas mi mai D:");
    }
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "login-element": Login;
  }
}
