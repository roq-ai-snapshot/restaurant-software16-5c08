import * as yup from 'yup';
import { order_itemsValidationSchema } from 'validationSchema/order_items';

export const OrdersValidationSchema = yup.object().shape({
  status: yup.string().required(),
  special_instructions: yup.string(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  customer_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
  order_items: yup.array().of(order_itemsValidationSchema),
});
