import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExpiredPeriodInputContainer from 'containers/card/ExpiredPeriodInputContainer';
import { FieldSet } from 'fields/Fieldset';
import ExpiredPeriodFieldset from 'fields/ExpiredPeriodFieldset';
import CVCFieldset from 'fields/CVCFieldset';
import CardPasswordFieldset from 'fields/CardPasswordFieldset';
import CardOwnerNameFieldset from 'fields/CardOwnerNameFieldset';
import CardFormContainer from 'containers/card/CardFormContainer';

export default {
  title: 'Component/CardForm',
  component: FieldSet,
} as ComponentMeta<typeof FieldSet>;

const CardFormTemplate: ComponentStory<typeof CardFormContainer> = (args) => <CardFormContainer />;

const ExpiredPeriodFieldsetTemplate: ComponentStory<typeof ExpiredPeriodFieldset> = (args) => (
  <ExpiredPeriodFieldset />
);

const CVCFieldsetTemplate: ComponentStory<typeof CVCFieldset> = (args) => <CVCFieldset />;

const PasswordFieldsetTemplate: ComponentStory<typeof CardPasswordFieldset> = (args) => (
  <CardPasswordFieldset />
);

const OwnerNameFieldsetTemplate: ComponentStory<typeof CardOwnerNameFieldset> = (args) => (
  <CardOwnerNameFieldset />
);

export const Entire = CardFormTemplate.bind({});
export const ExpiredPeriod = ExpiredPeriodFieldsetTemplate.bind({});
export const CVC = CVCFieldsetTemplate.bind({});
export const Password = PasswordFieldsetTemplate.bind({});
export const OwnerName = OwnerNameFieldsetTemplate.bind({});
