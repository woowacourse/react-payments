import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import * as S from '../../../features/cardInfo/ui/CardInfoSection.styles';
import { CustomInput } from '../../../shared/ui/customInput.styles';
import { cardNumberValidator } from '../../../features/cardInfo/validation/cardInfoValidator';
import Preview from './Preview';

const meta: Meta<typeof Preview> = {
  title: 'Features/Preview',
  component: Preview,
  tags: ['autodocs'],
  argTypes: {
    cardNumber: {
      control: 'object',
      description: 'Card Numbers 4 Digit Array',
      table: {
        type: { summary: 'string[]' },
      },
    },
    cardExpirationDate: {
      control: 'object',
      description: 'Card Expiration Date: { month: string, year: string }',
      table: {
        type: { summary: '{ month: string; year: string }' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Preview>;

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
      <main className='card-container' style={{ gap: '20px' }}>
        <Preview cardNumber={cardNumbers} cardExpirationDate={{ month: '04', year: '21' }} />
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
      </main>
    );
  },
};
