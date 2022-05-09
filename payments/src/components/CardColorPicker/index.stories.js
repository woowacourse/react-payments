import { useState } from 'react';
import ColorPicker from '.';
import useCard from '../../hooks/useCardInfoReducer';

export default {
  title: 'ColorPicker',
  component: ColorPicker,
};

export const ColorPickModal = () => {
  const [visible, setVisible] = useState(true);
  const [form, dispatch] = useCard();

  return <ColorPicker visible={true} setVisible={setVisible} updateForm={dispatch} />;
};
