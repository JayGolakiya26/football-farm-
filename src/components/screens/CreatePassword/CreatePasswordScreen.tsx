import React from "react";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import TitleWithButton from "@molecules/TitleWithButton/TitleWithButton";
import ArrowLeft from "@atoms/Illustration/ArrowLeft";
import CreatePasswordForm from "@organisms/CreatePasswordForm/CreatePasswordForm";
import FormTemplate from "@templates/FormTemplate/FormTemplate";
import { RootState } from "@redux/store";
import {register} from "@api/auth";
import {useSelector} from "react-redux";
import { formatRegisterRequestParams } from "@utils/auth.utils";
import { SignUpUserState } from "@redux/slices/auth";
import { useAppNavigation, useAuthNavigation } from "@navigation/hooks";
// import { formatRegisterRequestParams } from "@utils/auth.utils";

const CreatePasswordScreen = () => {
  const signUpUser = useSelector( (state:RootState) => state.auth.signUpUser);
  const onSignupPress = async (values:{password:string , confirmpassword:string}) =>{
    try{
      const valuesToPass = formatRegisterRequestParams(signUpUser);
      const response = await register({...valuesToPass , password:values.password})
      if (response.data.status === false) {
        throw new Error("Registration failed. Status is false."); 
      }
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <ScreenTemplate>
      <>
        <TitleWithButton text="create password" image={ArrowLeft} />
        <FormTemplate Component={CreatePasswordForm} onSubmit={onSignupPress}  />
      </>
    </ScreenTemplate>
  );
};

export default CreatePasswordScreen;