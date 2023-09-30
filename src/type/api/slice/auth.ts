import { UserLoginType } from "../User";

export interface SignUpUserState {
    loginType: UserLoginType;
    ageTermsAccepted: 0 | 1;
    firstName: string;
    lastName?: string;
    email: string;
    referenceNumber?: string;
}