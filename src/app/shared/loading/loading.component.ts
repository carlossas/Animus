import { Component, OnInit } from '@angular/core';
import { PreloaderService } from '../preloader/preloader.service';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor(
    public preloaderS: PreloaderService
  ) { }

  ngOnInit() {
  }

}
