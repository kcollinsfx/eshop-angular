import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemsComponent } from './components/public/items/items.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemDetailsComponent } from './components/public/item-details/item-details.component';
import { FilterComponent } from './components/public/filter/filter.component';
import { CartComponent } from './components/public/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailsComponent,
    FilterComponent,
    CartComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, NgbModule, AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
