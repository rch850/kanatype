import { Component, OnInit } from '@angular/core';
import * as screenfull from 'screenfull';
import * as toastr from 'toastr';
import { KeyboardService } from './keyboard.service';
import { fromEvent } from 'rxjs';
import { map, filter, throttleTime } from 'rxjs/operators';

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
    if (screenfull.isEnabled) {
      toastr.info('画面をクリックすると全画面になります');
    }
    fromEvent(document, 'keydown')
    .pipe(
      map((ev: KeyboardEvent) => this.keyboard.convert(ev)),
      filter(kana => kana !== ''),
      throttleTime(500)
    )
    .subscribe(kana => {
      this.kana = kana;
      speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(this.kana);
      utter.lang = 'ja';
      speechSynthesis.speak(utter);
    });
  }

  onClick() {
    if (screenfull.isEnabled) {
      screenfull.request()
    }
  }
}
