import { Component, OnInit, OnDestroy } from '@angular/core';

import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isVisible: boolean = false;

  constructor(private loaderService: LoaderService){}
  ngOnInit() {
    this.loaderService.isLoading.subscribe(status => {
      this.isVisible = status;
    });
  }
  ngOnDestroy() {
    this.loaderService.isLoading.unsubscribe();
  }
}
