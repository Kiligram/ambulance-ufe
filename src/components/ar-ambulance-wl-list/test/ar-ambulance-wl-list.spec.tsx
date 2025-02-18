import { newSpecPage } from '@stencil/core/testing';
import { ArAmbulanceWlList } from '../ar-ambulance-wl-list';

describe('ar-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ArAmbulanceWlList],
      html: `<ar-ambulance-wl-list></ar-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as ArAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
