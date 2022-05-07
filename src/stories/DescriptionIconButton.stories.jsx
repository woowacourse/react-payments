import React from 'react';

import DescriptionIconButton from './../components/common/DescriptionIconButton';

import QuestionMarkIcon from '../assets/images/questionMarkIcon.svg';

export default {
  title: 'DescriptionIconButton',
  component: DescriptionIconButton,
};

const SECURITY_CODE_DESCRIPTION = 'CVV/CVC 번호는 카드 뒷 면에 있는 3자리 숫자이며 카드 보안을 위한 번호입니다.';

const Example = args => <DescriptionIconButton iconImage={QuestionMarkIcon} description={SECURITY_CODE_DESCRIPTION} />;

export const Default = Example.bind({});
Default.args = {};
