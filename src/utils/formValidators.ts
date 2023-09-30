import { FieldValidator } from 'final-form';

type Validator = FieldValidator<any>;

export const composeValidators =
  (...validators: Validator[]) =>
  (value: any, allValues: any, meta: any) =>
    validators.reduce(
      (error, validator) => error || validator(value, allValues, meta),
      undefined,
    );

export const requiredValidator: Validator = (value) =>
  !value ? 'errors:form.required' : undefined;

export const emailValidator: Validator = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'errors:form.invalidEmail'
    : undefined;
