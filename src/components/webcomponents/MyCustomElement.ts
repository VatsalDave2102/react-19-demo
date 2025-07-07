import type { FC } from "react";

const NAME = "my-custom-element";

class MyCustomElement extends HTMLElement {
  inner = this.attachShadow({ mode: "closed" });

  static observedAttributes = ["colour"];

  constructor() {
    super();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "colour" && oldValue !== newValue) {
      const element = this.inner.querySelector("input");
      if (!element) return;
      element.value = newValue;
    }
  }

  connectedCallback() {
    const colour = this.getAttribute("colour");

    this.inner.innerHTML = /* html */ `
      <label>
        <span>Colorise!</span>
        <input value="${colour}">
        <button>Apply</button>
      </label>
    `;

    const button = this.inner.querySelector("button");
    const input = this.inner.querySelector("input");

    if (!button || !input) throw new Error("Element missing");

    button.addEventListener("click", () => {
      const payload = new CustomEvent("ColourChange", {
        detail: input.value,
        bubbles: true,
        composed: true,
      });

      this.dispatchEvent(payload);
    });
  }
}

if (!customElements.get(NAME)) {
  customElements.define(NAME, MyCustomElement);
}

type MyCustomElementProps = {
  colour: string;
  onColourChange: (event: { detail: string }) => void;
};

export const MyComponent = NAME as unknown as FC<MyCustomElementProps>;

export default MyComponent;
