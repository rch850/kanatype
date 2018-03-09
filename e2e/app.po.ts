import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getKanaText() {
    return element(by.css('app-root .kana')).getText();
  }
}
