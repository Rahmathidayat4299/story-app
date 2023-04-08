import { LitElement, html, css } from 'lit'
import navbarCss from '../sass/partials/_header.scss'

export class MyNav extends LitElement {
  static get styles() {
    return css`
      ${navbarCss}
    `
  }

  
  render() {
    return html`
      <header class="header" id="header">
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
      </header>
    `
  }
}
customElements.define('my-nav', MyNav)
