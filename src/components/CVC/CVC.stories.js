import CVC from './CVC';
import { useState } from 'react';

export default {
  title: 'CardAddPage/CVC',
  component: CVC,
};

const Template = (args) => {
  const [cvc, setCVC] = useState(args.cvc);
  return <CVC cvc={cvc} setCVC={setCVC} />;
};

export const CVCInput = Template.bind({});
CVCInput.args = {
  cvc: '',
};
