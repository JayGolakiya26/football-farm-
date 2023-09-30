import { SignUpUserState } from "@redux/slices/auth"

export const formatRegisterRequestParams = (values: any)=> {
    return {
      login_type: values.loginType,
      age_terms_accepted:values.ageTermsAccepted,
      first_name:values.firstName,
      last_name:values.lastName,
      email:values.email,
      reference_number:values.referenceNumber
    }
  }