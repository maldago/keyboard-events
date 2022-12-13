import { newSpecPage } from '@stencil/core/testing';
import { TestIcon } from '../test-icon';

describe('test-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TestIcon],
      html: `<test-icon></test-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <test-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </test-icon>
    `);
  });
});
