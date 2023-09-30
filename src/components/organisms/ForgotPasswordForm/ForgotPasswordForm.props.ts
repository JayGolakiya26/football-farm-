import { FormRenderProps } from 'react-final-form';

export type ForgotFormValues = {
  email: string;
};

export type ForgotFormProps = FormRenderProps<ForgotFormValues>;
