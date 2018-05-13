import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class PlaymusicService {
  private progress: number;
  public onchange: Observable<number> = Observable.create(obvs => {
    this.observer = obvs;
  });

  private observer: Observer<number>;
  constructor() { }

  public setProgress(n: number) {
    this.progress = n;
    this.observer.next(n);
  }
}

