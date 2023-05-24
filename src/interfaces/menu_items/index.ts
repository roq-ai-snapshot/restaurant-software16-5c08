import { Order_itemsInterface } from 'interfaces/order_items';

export interface Menu_itemsInterface {
  id?: string;
  restaurant_id: string;
  name: string;
  description: string;
  price: number;
  image_url?: string;
  order_items?: Order_itemsInterface[];
}
