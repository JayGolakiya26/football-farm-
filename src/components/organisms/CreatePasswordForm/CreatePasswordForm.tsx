import React from 'react'
import {View} from 'react-native'
import { Field } from 'react-final-form';
import FieldTextInput from '@molecules/FieldTextInput/FieldTextInput';
import {useTranslation} from 'react-i18next';
import {Spacer} from '@atoms/common/common.styles';
import {Button} from 'react-native-paper';

const CreatePasswordForm = ({ form , isLoading }) => {
  const { t } = useTranslation('createPassword');
  return (
    <View>
      <Field
        name="password"
        placeholder={t('password')}
        component={FieldTextInput}
        secureTextEntry
        label={t('password')}
      />
       <Field
        name="confirmPassword"
        placeholder={t('password')}
        component={FieldTextInput}
        secureTextEntry
        label={t('confirmPassword')}
      />
      <Spacer size={16} />
      <Button onPress={form.submit} loading={isLoading}>{t('signUp')}</Button>
    </View>
  )
}

export default CreatePasswordForm