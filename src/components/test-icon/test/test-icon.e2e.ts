import { newE2EPage } from '@stencil/core/testing';

describe('test-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<test-icon></test-icon>');

    const element = await page.find('test-icon');
    expect(element).toHaveClass('hydrated');
  });
});
