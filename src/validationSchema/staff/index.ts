import * as yup from 'yup';

export const StaffValidationSchema = yup.object().shape({
  role: yup.string().required(),
  permissions: yup.string().required(),
  user_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
