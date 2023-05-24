import { Menu_itemsInterface } from 'interfaces/menu_items';
import { OrdersInterface } from 'interfaces/orders';
import { ReservationsInterface } from 'interfaces/reservations';
import { StaffInterface } from 'interfaces/staff';

export interface RestaurantsInterface {
  id?: string;
  owner_id: string;
  name: string;
  location: string;
  contact_information: string;
  operating_hours: string;
  menu_items?: Menu_itemsInterface[];
  orders?: OrdersInterface[];
  reservations?: ReservationsInterface[];
  staff?: StaffInterface[];
}
