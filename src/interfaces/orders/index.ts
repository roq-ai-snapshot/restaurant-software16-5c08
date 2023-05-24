import { Order_itemsInterface } from 'interfaces/order_items';

export interface OrdersInterface {
  id?: string;
  customer_id: string;
  restaurant_id: string;
  status: string;
  special_instructions?: string;
  created_at: Date;
  updated_at: Date;
  order_items?: Order_itemsInterface[];
}
