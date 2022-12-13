import { Element, Component, Prop, h, Host } from "@stencil/core";

import { CssClassMap } from "../../utils/utils";

@Component({
  tag: "test-icon",
  styleUrl: "test-icon.css",
  shadow: true,
})
export class TestIcon {
  @Element() hostElement: HTMLElement;
  @Prop() icon: "alert";
  @Prop() icontype: "text";
  @Prop() iconsize: "md";
  @Prop() qaIdElement: string;

  addIcon() {
    const template = document.createElement("template"),
      shadow = this.hostElement.shadowRoot,
      elementCountLimit = shadow.styleSheets.length === 0 ? 1 : 2;
    template.innerHTML = `<icon-${this.icon}></icon-${this.icon}>`;

    if (shadow.childElementCount === elementCountLimit) {
      // Remove the existing test-icon-* element
      shadow.lastChild.remove();
    }
    if (shadow.childElementCount === elementCountLimit - 1) {
      // Add the new test-icon-* element
      shadow.appendChild(template.content.cloneNode(true));
    }
  }
  render() {
    this.addIcon();
    const classMap = this.getCssClassMap();
    return <Host qa-id={this.qaIdElement} class={classMap}></Host>;
  }
  private getCssClassMap(): CssClassMap {
    return {
      [this.icontype]: true,
      [this.iconsize]: true,
    };
  }
}
