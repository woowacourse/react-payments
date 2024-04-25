/* eslint-disable storybook/prefer-pascal-case */
import { Meta, StoryObj } from '@storybook/react';
import InputField from '../components/common/inputField/InputField';
import Input from '../components/common/input/Input';
import { CARD_NUMBER_INDEXES, PASSWORD_INPUT_KEYS } from '../constants/card';

const meta = {
  title: 'InputField',
  component: InputField,
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof InputField>;

export const 카드번호_입력_레이아웃: Story = {
  args: {
    title: '결제할 카드 번호를 입력해 주세요',
    subtitle: '본인 명의의 카드만 결제 가능합니다.',
    labelText: '카드 번호',
    labelFor: 'first-card-numbers-input',
    children: (
      <>
        {CARD_NUMBER_INDEXES.map(key => {
          const type = PASSWORD_INPUT_KEYS.includes(key) ? 'password' : 'text';

          return (
            <Input
              key={key}
              id={`${key}-card-numbers-input`}
              isError={false}
              value=""
              onChange={() => ''}
              onBlur={() => ''}
              placeholder="1234"
              maxLength={4}
              type={type}
              width="23%"
            />
          );
        })}
      </>
    ),
  },
};

export const 유효기간_입력_레이아웃: Story = {
  args: {
    title: '카드 유효기간을 입력해 주세요',
    subtitle: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    labelText: '유효기간',
    labelFor: 'card-expiry-month-input',
    children: (
      <>
        <Input
          id="card-expiry-month-input"
          isError={false}
          value=""
          onChange={() => ''}
          onBlur={() => ''}
          placeholder="MM"
          maxLength={2}
          width="48%"
        />
        <Input
          id="card-expiry-year-input"
          isError={false}
          value=""
          onChange={() => ''}
          onBlur={() => ''}
          placeholder="YY"
          maxLength={2}
          width="48%"
        />
      </>
    ),
  },
};

export const 카드소유자_입력_레이아웃: Story = {
  args: {
    title: '카드 소유자 이름 입력을 입력해 주세요',
    subtitle: '본인 명의의 카드만 결제 가능합니다.',
    labelText: '소유자 이름',
    labelFor: 'cardholder-name-input',
    children: (
      <Input
        id="cardholder-name-input"
        isError={false}
        value=""
        onChange={() => ''}
        onBlur={() => ''}
        placeholder="JOHN DOE"
        width="100%"
        maxLength={100}
      />
    ),
  },
};
