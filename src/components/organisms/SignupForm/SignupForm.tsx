import React, {useState} from 'react';
import {
  emailValidator,
  requiredValidator,
  composeValidators,
} from '@utils/formValidators';
import FieldTextInput from '@molecules/FieldTextInput/FieldTextInput';
import {
  TextInputContainer,
  TextInputView,
  TextInput,
  TermsAndCondition,
  AndText,
  PrivacyPolicy,
  CheckboxView,
  TermsView,
  EmailInputContainer,
} from './SignupForm.styles';
import {SignupFormProps} from './SignupForm.props';
import GradientButton from '@atoms/GradientButton/GradientButton';
import {useTranslation} from 'react-i18next';
import {useAppTheme} from '@constants/theme';
import UserIcon from '@atoms/Illustrations/User';
import EmailIcon from '@atoms/Illustrations/Email';
import {Field} from 'react-final-form';
import {Row} from '@atoms/common/common.styles';
import {Pressable, Image} from 'react-native';
import CheckBox from 'react-native-check-box';
import images from '@assets/images/index';

const SignupForm: React.FC<SignupFormProps> = ({form, loading}) => {
  const {t} = useTranslation('signup');
  const {colors} = useAppTheme();
  const [isDisabled, setIsDisabled] = useState(true);
  const [isChecked, setChecked] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActiveEmail, setIsActiveEmail] = useState(false);
  const [isValidator, setIsValidator] = useState(false);
  const handleFocus = () => {
    setIsActive(true);
  };
  const onFocus = () => {
    setIsActiveEmail(true);
  };
  const handleBlur = () => {
    setIsActive(false);
    setIsActiveEmail(false);
  };

  const handleSubmit = () => {
    setIsValidator(true);
    form.submit();
  };

  let values = {firstname: '', lastname: '', email: ''};

  const displayValue = (inputName: string, inputValue: string) => {
    if (inputName && inputValue) {
      values[inputName] = inputValue;
    }
    if (values?.email && values?.firstname && values?.lastname) {
      setIsDisabled(false);
    }
  };
  return (
    <>
      <TextInputContainer>
        <TextInputView>
          <Field
            name="firstname"
            component={FieldTextInput}
            validate={requiredValidator}
            returnKeyType="done"
            placeholder={t('firstname')}
            label={t('firstnamelabel')}
            focus={handleFocus}
            blur={handleBlur}
            left={() => (
              <UserIcon color={isActive ? colors.primaryColor : colors.gray} />
            )}
            displayValue={displayValue}
          />
        </TextInputView>
        <TextInputView>
          <TextInput
            name="lastname"
            component={FieldTextInput}
            validate={requiredValidator}
            returnKeyType="done"
            placeholder={t('lastname')}
            displayValue={displayValue}
          />
        </TextInputView>
      </TextInputContainer>
      <EmailInputContainer>
        <Field
          name="email"
          component={FieldTextInput}
          validate={composeValidators(requiredValidator, emailValidator)}
          keyboardType="email-address"
          returnKeyType="done"
          placeholder={t('email')}
          label={t('emaillabel')}
          focus={onFocus}
          blur={handleBlur}
          left={() => (
            <EmailIcon color={isActiveEmail ? colors.primaryColor : colors.gray} />
          )}
          right={isValidator ? true : false}
          displayValue={displayValue}
        />
      </EmailInputContainer>
      <Row>
        <CheckboxView>
          <CheckBox
            isChecked={isChecked}
            onClick={() => setChecked(!isChecked)}
            checkedImage={<Image source={images.checkbox} />}
            unCheckedImage={<Image source={images.uncheck} />}
          />
        </CheckboxView>
        <TermsView>
          <TermsAndCondition>{t('termsandconditions')}</TermsAndCondition>
          <Pressable>
            <PrivacyPolicy> {t('servicetext')}</PrivacyPolicy>
          </Pressable>
          <AndText> & </AndText>
          <Pressable>
            <PrivacyPolicy>{t('privacypolicy')}</PrivacyPolicy>
          </Pressable>
        </TermsView>
      </Row>
      <GradientButton
        loading={loading}
        onPress={handleSubmit}
        textColor={colors.disabledTextColor}
        disabled={isDisabled}
      >
        {t('continue')}
      </GradientButton>
    </>
  );
};

export default SignupForm;
