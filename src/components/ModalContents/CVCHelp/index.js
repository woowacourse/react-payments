import React from 'react';
import { IMAGE } from '../../../constants/constant';

import { CVCHelpWrapper } from './index.styles';

const CVCHelp = () => {
  return (
    <CVCHelpWrapper>
      <img className='cvc-help-img' src={IMAGE.CVC} />
    </CVCHelpWrapper>
  );
};

export default CVCHelp;
