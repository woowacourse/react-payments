import type { Meta, StoryObj } from '@storybook/react';
import {
  cardNumberValidator,
  cardExpirationDateValidator,
  cardCVCValidator,
} from '../../features/cardInfo/validation/cardInfoValidator';
import { useState } from 'react';
import * as S from '../../features/cardInfo/ui/CardInfoSection.styles';
import CustomInput from './CustomInput';
import { MONTH_ERROR, NO_ERROR, YEAR_ERROR } from '../constants/errorConstants';

const meta: Meta<typeof CustomInput> = {
  title: 'Shared/CustomInput',
  component: CustomInput,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'text' },
    placeholder: { control: 'text' },
    name: { control: 'text' },
    onChange: { action: 'changed' },
    maxLength: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof CustomInput>;

export const Default: Story = {
  render: () => {
    const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
    const [error, setError] = useState([NO_ERROR, '']);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const index = Number(name[name.length - 1]);
      const updatedNumbers = cardNumbers.map((num, i) => (i === index ? value : num));
      setCardNumbers(updatedNumbers);

      const [errorIndex, errorMessage] = cardNumberValidator(updatedNumbers);
      setError(errorIndex !== NO_ERROR ? [errorIndex, errorMessage] : [NO_ERROR, '']);
    };

    return (
      <S.CardInfoSubSection style={{ width: '300px' }}>
        <S.CardInfoInputContainer>
          {Array.from({ length: 4 }, (_, index) => (
            <CustomInput
              key={`cardNumber-${index}`}
              type='text'
              placeholder='1234'
              name={`cardNumber-${index}`}
              maxLength={4}
              onChange={handleChange}
              error={error[0] === index}
            />
          ))}
        </S.CardInfoInputContainer>
        {error && <S.CardInfoError>{error[1]}</S.CardInfoError>}
      </S.CardInfoSubSection>
    );
  },
};

export const ExpirationDateInput: Story = {
  render: () => {
    const [date, setDate] = useState({ month: '', year: '' });
    const [error, setError] = useState([NO_ERROR, '']);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const key = name.split('-')[1] as 'month' | 'year';

      const updatedDate = { ...date, [key]: value };
      setDate(updatedDate);

      const [errorIndex, errorMessage] = cardExpirationDateValidator(updatedDate);
      setError(errorIndex !== NO_ERROR ? [errorIndex, errorMessage] : [NO_ERROR, '']);
    };

    return (
      <S.CardInfoSubSection style={{ width: '200px' }}>
        <S.CardInfoInputContainer>
          <CustomInput
            type='text'
            placeholder='MM'
            name='cardExpirationDate-month'
            maxLength={2}
            onChange={handleChange}
            error={error[0] === MONTH_ERROR}
          />
          <CustomInput
            type='text'
            placeholder='YY'
            name='cardExpirationDate-year'
            maxLength={2}
            onChange={handleChange}
            error={error[0] === YEAR_ERROR}
          />
        </S.CardInfoInputContainer>
        {error && <S.CardInfoError>{error[1]}</S.CardInfoError>}
      </S.CardInfoSubSection>
    );
  },
};

export const CVCInput: Story = {
  render: () => {
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      const [errorIndex, errorMsg] = cardCVCValidator(newValue);
      if (errorIndex !== NO_ERROR) {
        setIsError(true);
        setMessage(errorMsg as string);
      } else {
        setIsError(false);
        setMessage('');
      }
    };

    return (
      <S.CardInfoSubSection style={{ width: '200px' }}>
        <CustomInput
          type='text'
          placeholder='CVC 입력'
          name='cardCVC'
          maxLength={3}
          onChange={handleChange}
          error={isError}
        />
        {isError && <S.CardInfoError>{message}</S.CardInfoError>}
      </S.CardInfoSubSection>
    );
  },
};
