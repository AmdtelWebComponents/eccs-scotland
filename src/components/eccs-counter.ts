import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

// Placeholder Lit component; replace with real interactive pieces as needed.
@customElement("eccs-counter")
export class EccsCounter extends LitElement {
  static styles = css`
    button {
      font: inherit;
      padding: 0.25rem 0.75rem;
    }
  `;

  @property({ type: Number }) count = 0;

  render() {
    return html`<button @click=${() => this.count++}>Count: ${this.count}</button>`;
  }
}
