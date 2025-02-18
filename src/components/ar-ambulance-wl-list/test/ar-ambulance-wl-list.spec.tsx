import { newSpecPage } from '@stencil/core/testing';
import { ArAmbulanceWlList } from '../ar-ambulance-wl-list';

describe('ar-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ArAmbulanceWlList],
      html: `<ar-ambulance-wl-list></ar-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <ar-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ar-ambulance-wl-list>
    `);
  });
});
