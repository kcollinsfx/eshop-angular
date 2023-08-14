import { Component, OnInit} from '@angular/core';
import { ItemService } from '../../../services/item.service';
import { Item } from 'src/app/models/item';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{
  items: any = [];

  constructor(private itemService: ItemService, public storeService: StoreService){}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(
      items => { this.storeService.items = items}
    );
  }
}
