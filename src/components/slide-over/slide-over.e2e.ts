import { newE2EPage } from "@stencil/core/testing";

describe("when the trigger exists and", () => {
  it("is focused then Enter is pressed content should be visible", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<eco-slide-over><span slot="trigger"></span>Content</eco-slide-over>`
    );

    const trigger = await page.find("[slot='trigger']");
    const backdrop = await page.find("eco-slide-over >>> eco-backdrop");

    expect((await backdrop.getComputedStyle()).display).toBe("none");
    expect(trigger).toBeTruthy();

    await trigger.focus();
    await page.keyboard.press("Enter");
    await page.waitForChanges();

    expect((await backdrop.getComputedStyle()).display).not.toBe("none");
  });
});
