export {default} from './src/BaseApp'
import './src/i18n/i18n';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
  $textColor: '#0275d8',
});
