import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CVCInputContainer from 'containers/card/CVCInputContainer';
import CardFormInput from 'components/card/CardFormInput';
import CardNumberInputContainer from '../containers/card/CardNumberInputContainer';
import CardOwnerNameInputContainer from 'containers/card/CardOwnerNameInputContainer';
import CardPasswordInputContainer from 'containers/card/CardPasswordInputContainer';
import ExpiredPeriodInputContainer from 'containers/card/ExpiredPeriodInputContainer';

export default {
  title: 'Component/CardFormInput',
  component: CardFormInput,
} as ComponentMeta<typeof CardFormInput>;

const CVCInputTemplate: ComponentStory<typeof CVCInputContainer> = () => <CVCInputContainer />;

const numberInputTemplate: ComponentStory<typeof CardNumberInputContainer> = () => (
  <CardNumberInputContainer />
);

const OwnerNameInputTemplate: ComponentStory<typeof CardOwnerNameInputContainer> = () => (
  <CardOwnerNameInputContainer />
);

const PasswordInputTemplate: ComponentStory<typeof CardPasswordInputContainer> = () => (
  <CardPasswordInputContainer />
);

const ExpiredPeriodInputTemplate: ComponentStory<typeof ExpiredPeriodInputContainer> = (args) => (
  <ExpiredPeriodInputContainer />
);

export const ExpiredPeriod = ExpiredPeriodInputTemplate.bind({});

export const CVC = CVCInputTemplate.bind({});

export const Number = numberInputTemplate.bind({});

export const Owner = OwnerNameInputTemplate.bind({});

export const Password = PasswordInputTemplate.bind({});
