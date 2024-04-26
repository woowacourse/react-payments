import { Meta, StoryObj } from '@storybook/react';
import InputField from '../components/InputComponent/InputField';
import styled from 'styled-components';

// 모의 Input 컴포넌트 생성
const MockInput = styled.input`
  border: 1px solid #ccc;
  padding: 8px;
  width: 100%;
`;

const defaultArgs = {
  label: 'Example Label',
  errorMessages: {},
};

export default {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    children: { control: false },
  },
} satisfies Meta<typeof InputField>;

const Template: StoryObj<typeof InputField> = {
  args: {
    ...defaultArgs,
    children: <MockInput placeholder='Empty' />,
  },
};

export const Default = Template;

export const WithError = {
  args: {
    ...Template.args,
    errorMessages: { 0: 'Error' },
  },
};

export const MultipleInputs = {
  args: {
    ...Template.args,
    children: (
      <>
        <MockInput placeholder='Empty' />
        <MockInput placeholder='Empty' />
      </>
    ),
  },
};
