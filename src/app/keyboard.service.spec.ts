import { TestBed } from '@angular/core/testing';

import { KeyboardService } from './keyboard.service';

describe('KeyboardService', () => {
  let service: KeyboardService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeyboardService]
    });
    service = TestBed.inject(KeyboardService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('convert', () => {
    expect(service.convert({code: 'KeyA'} as KeyboardEvent)).toEqual('ち');
  })
});
