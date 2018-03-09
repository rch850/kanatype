import { AppPage } from './app.po';

describe('kana App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display nothing', () => {
    page.navigateTo();
    expect(page.getKanaText()).toEqual('');
  });
});
