import { Component, OnInit } from '@angular/core';
import * as screenfull from 'screenfull';
import * as toastr from 'toastr';
import { KeyboardService } from './keyboard.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

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
    Observable.fromEvent(document, 'keydown')
        .map((ev: KeyboardEvent) => this.keyboard.convert(ev))
        .filter(kana => kana !== '')
        .throttleTime(500)
        .subscribe(kana => {
      this.kana = kana;
      speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(this.kana);
      utter.lang = 'ja';
      speechSynthesis.speak(utter);
    });
  }

  onClick() {
    screenfull.request();
  }
}
