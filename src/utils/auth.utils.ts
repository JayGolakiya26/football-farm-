import { SignUpUserState } from "src/type/api/slice/auth"

export const formatRegisterRequestParams = (values?: SignUpUserState)=> {
  if (!values) {
    throw new Error("Values are undefined"); 
  }
  return {
    login_type: values.loginType,
    age_terms_accepted: values.ageTermsAccepted,
    first_name: values.firstName,
    last_name: values.lastName,
    email: values.email,
    reference_number: values.referenceNumber
  }
}