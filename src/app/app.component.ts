import { Component } from '@angular/core';
import { PreloaderService } from './shared/preloader/preloader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public preloaderS: PreloaderService
  ) { 
    this.preloaderS.fireLoader();
    setTimeout(() => {
      this.preloaderS.stopLoader();
    }, 2500);
  }

}


