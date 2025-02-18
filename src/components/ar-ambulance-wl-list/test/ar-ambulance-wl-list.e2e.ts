import { newE2EPage } from '@stencil/core/testing';

describe('ar-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ar-ambulance-wl-list></ar-ambulance-wl-list>');

    const element = await page.find('ar-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
