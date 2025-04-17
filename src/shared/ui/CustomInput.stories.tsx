import type { Meta, StoryObj } from '@storybook/react';
import CustomInput from './CustomInput';
import {
  cardNumberValidator,
  cardExpirationDateValidator,
  cardCVCValidator,
} from '../../features/cardInfo/validation/cardInfoValidator';
import { useState } from 'react';
import '../../features/cardInfo/ui/cardInfoSection.css';

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
    const [error, setError] = useState([-1, '']);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const index = Number(name[name.length - 1]);
      const updatedNumbers = cardNumbers.map((num, i) => (i === index ? value : num));
      setCardNumbers(updatedNumbers);

      const [errorIndex, errorMessage] = cardNumberValidator(updatedNumbers);
      setError(errorIndex !== -1 ? [errorIndex, errorMessage] : [-1, '']);
    };

    return (
      <div className='card-info-sub-section' style={{ width: '300px' }}>
        <div className='card-info-input-container'>
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
        </div>
        {error && <span className='card-info-error'>{error[1]}</span>}
      </div>
    );
  },
};

export const ExpirationDateInput: Story = {
  render: () => {
    const [date, setDate] = useState({ month: '', year: '' });
    const [error, setError] = useState([-1, '']);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const key = name.split('-')[1] as 'month' | 'year';

      const updatedDate = { ...date, [key]: value };
      setDate(updatedDate);

      const [errorIndex, errorMessage] = cardExpirationDateValidator(updatedDate);
      setError(errorIndex !== -1 ? [errorIndex, errorMessage] : [-1, '']);
    };

    return (
      <div className='card-info-sub-section' style={{ width: '200px' }}>
        <div className='card-info-input-container'>
          <CustomInput
            type='text'
            placeholder='MM'
            name='cardExpirationDate-month'
            maxLength={2}
            onChange={handleChange}
            error={error[0] === 0}
          />
          <CustomInput
            type='text'
            placeholder='YY'
            name='cardExpirationDate-year'
            maxLength={2}
            onChange={handleChange}
            error={error[0] === 1}
          />
        </div>
        {error && <span className='card-info-error'>{error[1]}</span>}
      </div>
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
      if (errorIndex !== -1) {
        setIsError(true);
        setMessage(errorMsg as string);
      } else {
        setIsError(false);
        setMessage('');
      }
    };

    return (
      <div className='card-info-sub-section' style={{ width: '200px' }}>
        <CustomInput
          type='text'
          placeholder='CVC 입력'
          name='cardCVC'
          maxLength={3}
          onChange={handleChange}
          error={isError}
        />
        {isError && <span className='card-info-error'>{message}</span>}
      </div>
    );
  },
};
