import { newSpecPage } from "@stencil/core/testing";
import { BackDrop } from "../back-drop";

describe("back-drop", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [BackDrop],
      html: `<back-drop></back-drop>`,
    });
    expect(page.root).toEqualHtml(`
      <back-drop>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </back-drop>
    `);
  });
});
