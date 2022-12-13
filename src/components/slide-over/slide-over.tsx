import {
  Event,
  Element,
  Component,
  Host,
  h,
  EventEmitter,
  Method,
  Prop,
} from "@stencil/core";
import { trapFocusShadowDom } from "../../utils/utils";

@Component({
  tag: "slide-over",
  styleUrl: "slide-over.css",
  shadow: true,
})
export class SlideOver {
  @Element() hostElement: HTMLElement;
  @Prop() qaIdElement: string;
  @Prop() qaIdClose: string;
  @Prop({ mutable: true }) visible: boolean = false;
  @Event() public close: EventEmitter;
  @Event() public trigger: EventEmitter;
  speedSuperFast: number = 450;

  constructor() {
    this.handleClose = this.handleClose.bind(this);
  }

  @Method()
  async handleClose() {
    if (this.backdrop) {
      await this.backdrop.hideBackdrop();
    }
    this.visible = false;
    document.body.style.overflow = "";
    this.close.emit();
  }

  @Method()
  async handleTrigger() {
    if (this.backdrop) {
      await this.backdrop.showBackdrop();
    }
    this.visible = true;
    document.body.style.overflow = "hidden";
    this.trigger.emit();
    setTimeout(() => {
      trapFocusShadowDom(
        this.hostElement,
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      );
    }, this.speedSuperFast);
  }

  public handleEscape = (e: { key: string; keyCode: number }) => {
    if (e.key == "Escape" || e.key === "Esc" || e.keyCode === 27) {
      this.handleClose();
    }
  };
  get slot(): HTMLSlotElement {
    return this.hostElement.querySelector('[slot="trigger"]');
  }
  get backdrop(): HTMLBackDropElement {
    return this.hostElement.shadowRoot.querySelector("back-drop");
  }
  get content(): HTMLElement {
    return this.hostElement.shadowRoot.querySelector(".content");
  }

  attachTrigger() {
    if (this.slot) {
      if (!this.slot.getAttribute("tabindex")) {
        this.slot.setAttribute("tabindex", "0");
      }
      this.slot.addEventListener("click", () => {
        if (
          !this.slot.hasAttribute("disabled") ||
          this.slot.getAttribute("disabled") == "false"
        ) {
          this.handleTrigger();
        }
      });
      this.slot.addEventListener("keyup", (e: KeyboardEvent) => {
        if (e.key === "Enter") {
          this.handleTrigger();
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
          }
        }
      });
    }
  }
  componentDidRender() {
    this.attachTrigger();
  }
  disconnectedCallback() {
    if (this.visible) {
      this.handleClose();
    }
  }
  render() {
    window.addEventListener("popstate", () => {
      this.handleClose();
    });

    return (
      <Host qa-id={this.qaIdElement} onKeyUp={this.handleEscape}>
        <slot name="trigger"></slot>
        <back-drop>
          <div class="overlay-clickable" onClick={this.handleClose}></div>
          <div class="content">
            <test-icon
              tabindex="0"
              onKeyPress={this.handleClose}
              onClick={this.handleClose}
              icon={"alert"}
              icontype={"text"}
              qaIdElement={this.qaIdClose}
            ></test-icon>
            <slot></slot>
          </div>
        </back-drop>
      </Host>
    );
  }
}
