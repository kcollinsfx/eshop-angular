import { Item } from "./item";

export interface ItemPayload {
  items: Item[]; // list of items returned after each API call
  count: number; // total number of items contained in the database
}
