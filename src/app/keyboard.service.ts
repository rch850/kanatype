import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {

  readonly KANA_MAP: Record<string, string> = {};

  constructor() {

    this.KANA_MAP['Digit0'] = 'わ';
    this.KANA_MAP['Digit1'] = 'ぬ';
    this.KANA_MAP['Digit2'] = 'ふ';
    this.KANA_MAP['Digit3'] = 'あ';
    this.KANA_MAP['Digit4'] = 'う';
    this.KANA_MAP['Digit5'] = 'え';
    this.KANA_MAP['Digit6'] = 'お';
    this.KANA_MAP['Digit7'] = 'や';
    this.KANA_MAP['Digit8'] = 'ゆ';
    this.KANA_MAP['Digit9'] = 'よ';
    this.KANA_MAP['Minus'] = 'ほ';
    this.KANA_MAP['Equal'] = 'へ';

    this.KANA_MAP['KeyA'] = 'ち';
    this.KANA_MAP['KeyB'] = 'こ';
    this.KANA_MAP['KeyC'] = 'そ';
    this.KANA_MAP['KeyD'] = 'し';
    this.KANA_MAP['KeyE'] = 'い';
    this.KANA_MAP['KeyF'] = 'は';
    this.KANA_MAP['KeyG'] = 'き';
    this.KANA_MAP['KeyH'] = 'く';
    this.KANA_MAP['KeyI'] = 'に';
    this.KANA_MAP['KeyJ'] = 'ま';
    this.KANA_MAP['KeyK'] = 'の';
    this.KANA_MAP['KeyL'] = 'り';
    this.KANA_MAP['KeyM'] = 'も';
    this.KANA_MAP['KeyN'] = 'み';
    this.KANA_MAP['KeyO'] = 'ら';
    this.KANA_MAP['KeyP'] = 'せ';
    this.KANA_MAP['KeyQ'] = 'た';
    this.KANA_MAP['KeyR'] = 'す';
    this.KANA_MAP['KeyS'] = 'と';
    this.KANA_MAP['KeyT'] = 'か';
    this.KANA_MAP['KeyU'] = 'な';
    this.KANA_MAP['KeyV'] = 'ひ';
    this.KANA_MAP['KeyW'] = 'て';
    this.KANA_MAP['KeyX'] = 'さ';
    this.KANA_MAP['KeyY'] = 'ん';
    this.KANA_MAP['KeyZ'] = 'つ';

    this.KANA_MAP['Semicolon'] = 'れ';
    this.KANA_MAP['Quote'] = 'け';
    this.KANA_MAP['Backslash'] = 'む';
    this.KANA_MAP['Comma'] = 'ね';
    this.KANA_MAP['Period'] = 'る';
    this.KANA_MAP['Slash'] = 'め';
    this.KANA_MAP['IntlRo'] = 'ろ';
  }

  convert(ev: KeyboardEvent): string {
    return this.KANA_MAP[ev.code] || '';
  }

}
