import { LitElement, html, css } from "lit";
// import navbarCss from "../sass/partials/_header.scss";


class MyNav extends LitElement {

  render() {
    return html`
      <nav class="navbar">
        <a href="#" class="logo">Dicoding</a>

        <div class="nav-list">
          <button class="hamburger-btn" id="hamburger-btn">
            <i class="fas fa-bars"></i>
          </button>

          <ul class="nav-items">
            <li class="nav-item">
              <a href="#" rel="noopener noreferrer">About</a>
            </li>
            <li class="nav-item">
              <a href="#" rel="noopener noreferrer">Skills</a>
            </li>
            <li class="nav-item">
              <a href="#" rel="noopener noreferrer">Portfolio</a>
            </li>
            <li class="nav-item">
              <a href="#" rel="noopener noreferrer">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }
}
customElements.define("my-nav", MyNav);
