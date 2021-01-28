import { newSpecPage } from '@stencil/core/testing';
import { FlBadge } from '../fl-badge';

describe('fl-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FlBadge],
      html: `<fl-badge></fl-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <fl-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fl-badge>
    `);
  });
});
