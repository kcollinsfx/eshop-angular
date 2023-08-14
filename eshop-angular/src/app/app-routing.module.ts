import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './components/public/items/items.component';
import { ItemDetailsComponent } from './components/public/item-details/item-details.component';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/public/cart/cart.component';

const routes: Routes = [
  { path: '', component: ItemsComponent},
  { path: 'items', component: ItemsComponent},
  { path: 'item/:id', component: ItemDetailsComponent },
  { path: 'cart', component: CartComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports :[RouterModule]
})
export class AppRoutingModule {
}
