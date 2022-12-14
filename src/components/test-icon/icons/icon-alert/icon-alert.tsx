import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "icon-alert",
  styleUrl: "icon-alert.css",
  shadow: true,
})
export class IconAlert {
  render() {
    return (
      <Host>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12.866 3l9.526 16.5a1 1 0 01-.866 1.5H2.474a1 1 0 01-.866-1.5L11.134 3a1 1 0 011.732 0zm-8.66 16h15.588L12 5.5 4.206 19zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"
          />
        </svg>
      </Host>
    );
  }
}
