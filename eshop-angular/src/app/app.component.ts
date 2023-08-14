import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { StoreService } from './services/store.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(
    http: HttpClient,
    public storeService: StoreService,
  ) {}

  title = 'eshop-angular';
  
}

