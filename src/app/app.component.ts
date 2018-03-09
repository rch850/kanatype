import { Component, OnInit } from '@angular/core';

const KANA_MAP = [];
KANA_MAP['Digit0'] = 'わ';
KANA_MAP['Digit1'] = 'ぬ';
KANA_MAP['Digit2'] = 'ふ';
KANA_MAP['Digit3'] = 'あ';
KANA_MAP['Digit4'] = 'う';
KANA_MAP['Digit5'] = 'え';
KANA_MAP['Digit6'] = 'お';
KANA_MAP['Digit7'] = 'や';
KANA_MAP['Digit8'] = 'ゆ';
KANA_MAP['Digit9'] = 'よ';
KANA_MAP['Minus'] = 'ほ';
KANA_MAP['Equal'] = 'へ';

KANA_MAP['KeyA'] = 'ち';
KANA_MAP['KeyB'] = 'こ';
KANA_MAP['KeyC'] = 'そ';
KANA_MAP['KeyD'] = 'し';
KANA_MAP['KeyE'] = 'い';
KANA_MAP['KeyF'] = 'は';
KANA_MAP['KeyG'] = 'き';
KANA_MAP['KeyH'] = 'く';
KANA_MAP['KeyI'] = 'に';
KANA_MAP['KeyJ'] = 'ま';
KANA_MAP['KeyK'] = 'の';
KANA_MAP['KeyL'] = 'り';
KANA_MAP['KeyM'] = 'も';
KANA_MAP['KeyN'] = 'み';
KANA_MAP['KeyO'] = 'ら';
KANA_MAP['KeyP'] = 'せ';
KANA_MAP['KeyQ'] = 'た';
KANA_MAP['KeyR'] = 'す';
KANA_MAP['KeyS'] = 'と';
KANA_MAP['KeyT'] = 'か';
KANA_MAP['KeyU'] = 'な';
KANA_MAP['KeyV'] = 'ひ';
KANA_MAP['KeyW'] = 'て';
KANA_MAP['KeyX'] = 'さ';
KANA_MAP['KeyY'] = 'ん';
KANA_MAP['KeyZ'] = 'つ';

KANA_MAP['Semicolon'] = 'れ';
KANA_MAP['Quote'] = 'け';
KANA_MAP['Backslash'] = 'む';
KANA_MAP['Comma'] = 'ね';
KANA_MAP['Period'] = 'る';
KANA_MAP['Slash'] = 'め';
KANA_MAP['IntlRo'] = 'ろ';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  kana = '';

  ngOnInit() {
    document.addEventListener('keydown', (ev) => {
      this.kana = KANA_MAP[ev.code] || '';
      if (this.kana !== '') {
        speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(this.kana);
        utter.lang = 'ja';
        speechSynthesis.speak(utter);
      }
    });
  }
}
