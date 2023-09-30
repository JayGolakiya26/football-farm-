import { FormRenderProps } from 'react-final-form';

export type SignupFormValues = {
  username: string;
  email: string;
};

export type SignupFormProps = FormRenderProps<SignupFormValues> & {
  loading: boolean;
};
