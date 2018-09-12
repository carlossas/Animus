import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';



@Injectable()
export class PreloaderService {

  loading$: Observable<boolean> = of(false);
  salidaAnimation: boolean = false;

  constructor() { }

  fireLoader() {
    this.salidaAnimation = false;
    this.loading$ = of(true);
  }

  stopLoader() {
    this.salidaAnimation = true;
    setTimeout(() => {
      this.loading$ = of(false);
    }, 850);
  }
}
