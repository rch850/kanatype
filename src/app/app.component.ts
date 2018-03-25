import { Component, OnInit } from '@angular/core';
import * as screenfull from 'screenfull';
import * as toastr from 'toastr';
import { KeyboardService } from './keyboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  kana = '';

  constructor (private keyboard: KeyboardService) {
  }

  ngOnInit() {
    toastr.info('画面をクリックすると全画面になります');
    document.addEventListener('keydown', (ev) => {
      this.kana = this.keyboard.convert(ev);
      if (this.kana !== '') {
        speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(this.kana);
        utter.lang = 'ja';
        speechSynthesis.speak(utter);
      }
    });
  }

  onClick() {
    screenfull.request();
  }
}
