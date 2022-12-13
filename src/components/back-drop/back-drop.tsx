import { Component, Host, h, Element, Method, Prop } from "@stencil/core";

@Component({
  tag: "back-drop",
  styleUrl: "back-drop.css",
  shadow: true,
})
export class BackDrop {
  @Element() hostElement: HTMLElement;
  @Prop({ mutable: true }) visible: boolean = false;
  fadeSpeed: number = 200;

  @Method()
  async showBackdrop(): Promise<void> {
    const e = this.hostElement.classList;
    this.visible = true;
    e.remove("hide");
    e.add("showing");
    setTimeout(() => {
      e.replace("showing", "show");
    }, this.fadeSpeed);
  }

  @Method()
  async hideBackdrop(): Promise<void> {
    const e = this.hostElement.classList;
    this.visible = false;
    if (e.contains("show")) {
      e.replace("show", "hiding");
      setTimeout(() => {
        e.replace("hiding", "hide");
      }, this.fadeSpeed);
    }
  }
  render() {
    if (this.visible) {
      this.hostElement.classList.add("show");
    }
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
