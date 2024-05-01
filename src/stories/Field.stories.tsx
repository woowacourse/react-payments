import type { Meta, StoryObj } from '@storybook/react';
import Field from '../components/common/Field/Field';
import Input from '../components/common/Input/Input';
import Label from '../components/common/Label/Label';
import { Fragment } from 'react';
import Select from '../components/common/Select/Select';
import { ADD_CARD_FORM_FIELDS } from '../constants/messages';

const meta = {
  title: 'Field',
  component: Field,

  argTypes: {
    children: {
      table: {
        disable: true,
      },
      control: false,
    },
  },
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

const CARD_NUMBERS_FIELDS = ['first', 'second', 'third', 'fourth'];
export const CardNumbers: Story = {
  args: {
    title: '결제할 카드 번호를 입력해 주세요',
    description: '본인 명의의 카드만 결제 가능합니다.',
    labelText: '카드 번호',
    errorMessage: '',
    children: (
      <>
        {CARD_NUMBERS_FIELDS.map((name, index) => (
          <>
            <Label key={index} htmlFor={name} labelText={name} hideLabel />
            <Input
              key={index}
              id={name}
              name={name}
              placeholder="1234"
              value=""
              isError={false}
              onChange={() => 1}
              onBlur={() => 1}
              maxLength={4}
            />
          </>
        ))}
      </>
    ),
  },
};

const EXPIRATION_DATE_FIELDS = ['month', 'year'];
export const ExpirationDate: Story = {
  args: {
    title: '카드 유효기간을 입력해 주세요',
    description: '월/년도(MMYY)를 순서대로 입력해 주세요',
    labelText: '유효기간',
    errorMessage: '',
    children: (
      <>
        {EXPIRATION_DATE_FIELDS.map((name, index) => (
          <>
            <Label key={index} htmlFor={name} labelText={name} hideLabel />
            <Input
              key={index}
              id={name}
              name={name}
              placeholder={name === 'month' ? 'MM' : 'YY'}
              value=""
              isError={false}
              onChange={() => 1}
              onBlur={() => 1}
              maxLength={4}
            />
          </>
        ))}
      </>
    ),
  },
};

export const OwnerName: Story = {
  args: {
    title: '카드 소유자 이름을 입력해 주세요',
    labelText: '소유자 이름',
    errorMessage: '',
    children: (
      <Fragment>
        <Label htmlFor="ownerName" labelText="ownerName" hideLabel />
        <Input
          id="ownerName"
          name="ownerName"
          placeholder="JOHN DOE"
          value=""
          isError={false}
          onChange={() => 1}
          onBlur={() => 1}
        />
      </Fragment>
    ),
  },
  argTypes: {
    description: {
      control: false,
    },
  },
};

export const CardIssuer: Story = {
  args: {
    title: '카드사를 선택해 주세요',
    description: '카드사를 선택해 주세요',
    errorMessage: '',
    children: (
      <Fragment>
        <Label htmlFor="cardIssuer" labelText="카드사" hideLabel />
        <Select
          name="cardIssuer"
          id="cardIssuer"
          value=""
          defaultText="카드사를 선택해 주세요"
          options={ADD_CARD_FORM_FIELDS.CARD_ISSUER.options}
          isError={false}
          isRequired
          onChange={() => 1}
          onBlur={() => 1}
        />
      </Fragment>
    ),
  },
  argTypes: {
    description: {
      control: false,
    },
  },
};

export const CVC: Story = {
  args: {
    title: 'CVC 번호를 입력해 주세요',
    labelText: 'CVC',
    errorMessage: '',
    children: (
      <Fragment>
        <Label htmlFor="cvc" labelText="cvc 번호" hideLabel />
        <Input
          id="cvc"
          name="cvc"
          placeholder="123"
          value=""
          isError={false}
          isRequired
          onChange={() => 1}
          onBlur={() => 1}
          maxLength={3}
        />
      </Fragment>
    ),
  },
  argTypes: {
    description: {
      control: false,
    },
  },
};

export const Password = {
  args: {
    title: '비밀번호를 입력해 주세요',
    description: '앞의 2자리를 입력해주세요',
    labelText: '비밀번호 앞 2자리',
    errorMessage: '',
    children: (
      <Fragment key="password">
        <Label
          htmlFor="password"
          labelText="카드 비밀번호 앞 2자리"
          hideLabel
        />
        <Input
          id="password"
          name="password"
          type="password"
          value="12"
          isError={false}
          placeholder=""
          isRequired
          onChange={() => 1}
          onBlur={() => 1}
          maxLength={2}
        />
      </Fragment>
    ),
  },
  argTypes: {
    description: {
      control: false,
    },
  },
};
