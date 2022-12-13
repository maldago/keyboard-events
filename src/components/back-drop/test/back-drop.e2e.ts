import { newE2EPage } from '@stencil/core/testing';

describe('back-drop', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<back-drop></back-drop>');

    const element = await page.find('back-drop');
    expect(element).toHaveClass('hydrated');
  });
});
