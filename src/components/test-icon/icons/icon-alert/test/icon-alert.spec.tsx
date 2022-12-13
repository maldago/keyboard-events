import { newSpecPage } from '@stencil/core/testing';
import { IconAlert } from '../icon-alert';

describe('icon-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlert],
      html: `<icon-alert></icon-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <icon-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </icon-alert>
    `);
  });
});
