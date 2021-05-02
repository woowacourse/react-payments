import { VFC } from 'react';
import { vibrate } from '../../../utils/vibrate';
import { CardButton } from './styles';

const AddCardButton: VFC = () => {
  return <CardButton onTouchStart={() => vibrate()}>+</CardButton>;
};

export default AddCardButton;
