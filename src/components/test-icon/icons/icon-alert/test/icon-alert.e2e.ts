import { newE2EPage } from '@stencil/core/testing';

describe('icon-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-alert></icon-alert>');

    const element = await page.find('icon-alert');
    expect(element).toHaveClass('hydrated');
  });
});
