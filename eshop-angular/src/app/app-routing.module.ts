import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './components/public/items/items.component';
import { ItemDetailsComponent } from './components/public/item-details/item-details.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ItemsComponent},
  { path: 'items', component: ItemsComponent},
  { path: 'item/:id', component: ItemDetailsComponent }
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
