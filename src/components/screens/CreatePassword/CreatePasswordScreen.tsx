import React from "react";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import TitleWithButton from "@molecules/TitleWithButton/TitleWithButton";
import ArrowLeft from "@atoms/Illustration/ArrowLeft";
import CreatePasswordForm from "@organisms/CreatePasswordForm/CreatePasswordForm";
import FormTemplate from "@templates/FormTemplate/FormTemplate";
import { RootState } from "@redux/store";
import {register} from "@api/auth";
import {useSelector} from "react-redux";
// import { formatRegisterRequestParams } from "@utils/auth.utils";

const CreatePasswordScreen = () => {
  const signUpUser = useSelector( (state:RootState) => state.auth.signUp);
  // const signUpUserToPass = formatRegisterRequestParams(signUpUser);
  const onSignupPress = async (values:{password:string , confirmpassword:string}) =>{
    try{
      const response = await register({...signUpUser , password:values.password})
     console.log(response, 'response')
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