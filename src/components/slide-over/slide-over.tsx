/* typescript-eslint-disable no-unused-vars */
import { Component, Prop, h } from "@stencil/core";
import { format } from "../../utils/utils";

@Component({
  tag: "slide-over-component",
  styleUrl: "slide-over.css",
  shadow: true
})
export class SlideOverComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return [
      <h1>codesandbox-stencil.js example</h1>,
      <div>Hello, World! I'm {this.getText()}</div>
    ];
  }
}
