
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

export function trapFocusShadowDom(
  focusWithin: HTMLElement,
  elementToFocus: string,
  focusWithinInner: string = "eco-backdrop"
) {
  const focusable = elementToFocus,
    backdrop: HTMLElement =
      focusWithin.shadowRoot.querySelector(focusWithinInner),
    firstFocusableEl: HTMLElement =
      backdrop.querySelectorAll<HTMLElement>(focusable)[0],
    focusableContent = backdrop.querySelectorAll<HTMLElement>(focusable),
    lastFocusableEl = focusableContent[focusableContent.length - 1];

  document.addEventListener("keydown", function (e) {
    let isTabPressed = e.key === "Tab";
    if (!isTabPressed) {
      return;
    }
    if (e.shiftKey) {
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        e.preventDefault();
      }
    }
  });
  firstFocusableEl.focus();
}

export type CssClassMap = { [className: string]: boolean };
