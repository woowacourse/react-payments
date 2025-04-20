import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CardInputProps } from '../types/CardInputTypes';
import InputGroup from '../component/InputGroup';
import Input from '../component/Input';
import {
  validateCardCVC,
  validateCardExpirationDateMM,
  validateCardExpirationDateYY,
  validateCardNumber,
} from '../validation/validation';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const meta: Meta<typeof InputGroup> = {
  title: 'Components/InputGroup',
  component: InputGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

const renderCardNumberInput = (setCardInput: any, handleErrorMessage: any) => (
  <Input
    maxLength={4}
    placeholder="0000"
    validate={validateCardNumber}
    handleErrorMessage={handleErrorMessage}
    onChange={value => {
      setCardInput((prev: CardInputProps) => ({
        ...prev,
        first: value === '' ? null : Number(value),
      }));
    }}
  />
);

const renderExpiryDateInputs = (setCardInput: any, handleErrorMessage: any) => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Input
      maxLength={2}
      placeholder="MM"
      validate={validateCardExpirationDateMM}
      handleErrorMessage={handleErrorMessage}
      onChange={value => {
        setCardInput((prev: CardInputProps) => ({
          ...prev,
          MM: value === '' ? null : Number(value),
        }));
      }}
    />
    <span style={{ alignSelf: 'center' }}>/</span>
    <Input
      maxLength={2}
      placeholder="YY"
      validate={validateCardExpirationDateYY}
      handleErrorMessage={handleErrorMessage}
      onChange={value => {
        setCardInput((prev: CardInputProps) => ({
          ...prev,
          YY: value === '' ? null : Number(value),
        }));
      }}
    />
  </div>
);

const renderCVCInput = (setCardInput: any, handleErrorMessage: any) => (
  <Input
    maxLength={3}
    placeholder="CVC"
    validate={validateCardCVC}
    handleErrorMessage={handleErrorMessage}
    onChange={value => {
      setCardInput((prev: CardInputProps) => ({
        ...prev,
        CVC: value === '' ? null : Number(value),
      }));
    }}
  />
);

export const CardNumberInputGroup: Story = {
  render: () => {
    const Component = () => {
      const [cardInput, setCardInput] = useState<CardInputProps>({
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
        MM: 0,
        YY: 0,
        CVC: 0,
      });
      const [errorMessages, setErrorMessages] = useState<
        Record<string, string>
      >({});

      const handleErrorMessage = (message: string) => {
        setErrorMessages(prev => ({
          ...prev,
          cardNumber: message,
        }));
      };

      const handleCardNumberErrorMessages = () => {
        const filterErrorMessage = [
          errorMessages.first,
          errorMessages.second,
          errorMessages.third,
          errorMessages.fourth,
        ].filter(message => message?.length);
        return filterErrorMessage[0];
      };

      return (
        <div style={{ width: '300px' }}>
          <InputGroup
            label="카드번호"
            errorMessages={handleCardNumberErrorMessages()}
          >
            {renderCardNumberInput(setCardInput, handleErrorMessage)}
          </InputGroup>
        </div>
      );
    };

    return <Component />;
  },
};

export const ExpiryDateInputGroup: Story = {
  render: () => {
    const Component = () => {
      const [cardInput, setCardInput] = useState<CardInputProps>({
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
        MM: 0,
        YY: 0,
        CVC: 0,
      });
      const [errorMessages, setErrorMessages] = useState<
        Record<string, string>
      >({});

      const handleErrorMessage = (message: string) => {
        setErrorMessages(prev => ({
          ...prev,
          expiryDate: message,
        }));
      };

      const handlePeriodErrorMessages = () => {
        const filterErrorMessage = [errorMessages.MM, errorMessages.YY].filter(
          msg => msg?.length,
        );
        return filterErrorMessage[0];
      };

      return (
        <div style={{ width: '300px' }}>
          <InputGroup
            label="유효기간"
            errorMessages={handlePeriodErrorMessages()}
          >
            {renderExpiryDateInputs(setCardInput, handleErrorMessage)}
          </InputGroup>
        </div>
      );
    };

    return <Component />;
  },
};

export const CVCInputGroup: Story = {
  render: () => {
    const Component = () => {
      const [cardInput, setCardInput] = useState<CardInputProps>({
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
        MM: 0,
        YY: 0,
        CVC: 0,
      });
      const [errorMessages, setErrorMessages] = useState<
        Record<string, string>
      >({});

      const handleErrorMessage = (message: string) => {
        setErrorMessages(prev => ({
          ...prev,
          cvc: message,
        }));
      };

      return (
        <div style={{ width: '300px' }}>
          <InputGroup label="CVC" errorMessages={errorMessages.cvc}>
            {renderCVCInput(setCardInput, handleErrorMessage)}
          </InputGroup>
        </div>
      );
    };

    return <Component />;
  },
};

export const InputGroupWithError: Story = {
  render: () => {
    const Component = () => {
      const [errorMessages] = useState<Record<string, string>>({
        cardNumber: '숫자만 입력 가능합니다.',
      });

      return (
        <div style={{ width: '300px' }}>
          <InputGroup label="카드번호" errorMessages={errorMessages.cardNumber}>
            <div
              style={{
                padding: '8px',
                border: '1px solid red',
                borderRadius: '4px',
              }}
            >
              abcd
            </div>
          </InputGroup>
        </div>
      );
    };

    return <Component />;
  },
};

export const PaymentFormExample: Story = {
  render: () => {
    const Component = () => {
      const [cardInput, setCardInput] = useState<CardInputProps>({
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
        MM: 0,
        YY: 0,
        CVC: 0,
      });
      const [errorMessages, setErrorMessages] = useState<
        Record<string, string>
      >({});

      const handleCardNumberError = (message: string) => {
        setErrorMessages(prev => ({
          ...prev,
          second: message,
        }));
      };

      const handleExpiryDateError = (message: string) => {
        setErrorMessages(prev => ({
          ...prev,
          third: message,
        }));
      };

      const handleCVCError = (message: string) => {
        setErrorMessages(prev => ({
          ...prev,
          cvc: message,
        }));
      };

      return (
        <div
          style={{
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <InputGroup label="카드번호" errorMessages={errorMessages.second}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Input
                maxLength={4}
                placeholder="0000"
                validate={validateCardNumber}
                handleErrorMessage={handleCardNumberError}
                onChange={value => {
                  setCardInput((prev: CardInputProps) => ({
                    ...prev,
                    first: value === '' ? null : Number(value),
                  }));
                }}
              />
              <Input
                maxLength={4}
                placeholder="0000"
                validate={validateCardNumber}
                handleErrorMessage={handleCardNumberError}
                onChange={value => {
                  setCardInput((prev: CardInputProps) => ({
                    ...prev,
                    second: value === '' ? null : Number(value),
                  }));
                }}
              />
              <Input
                maxLength={4}
                placeholder="0000"
                validate={validateCardNumber}
                handleErrorMessage={handleCardNumberError}
                onChange={value => {
                  setCardInput((prev: CardInputProps) => ({
                    ...prev,
                    third: value === '' ? null : Number(value),
                  }));
                }}
              />
              <Input
                maxLength={4}
                placeholder="0000"
                validate={validateCardNumber}
                handleErrorMessage={handleCardNumberError}
                onChange={value => {
                  setCardInput((prev: CardInputProps) => ({
                    ...prev,
                    fourth: value === '' ? null : Number(value),
                  }));
                }}
              />
            </div>
          </InputGroup>

          <div style={{ display: 'flex', gap: '12px' }}>
            <InputGroup label="유효기간" errorMessages={errorMessages.third}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Input
                  maxLength={2}
                  placeholder="MM"
                  validate={validateCardExpirationDateMM}
                  handleErrorMessage={handleExpiryDateError}
                  onChange={value => {
                    setCardInput((prev: CardInputProps) => ({
                      ...prev,
                      MM: value === '' ? null : Number(value),
                    }));
                  }}
                />
                <span style={{ alignSelf: 'center' }}>/</span>
                <Input
                  maxLength={2}
                  placeholder="YY"
                  validate={validateCardExpirationDateYY}
                  handleErrorMessage={handleExpiryDateError}
                  onChange={value => {
                    setCardInput((prev: CardInputProps) => ({
                      ...prev,
                      YY: value === '' ? null : Number(value),
                    }));
                  }}
                />
              </div>
            </InputGroup>

            <InputGroup label="CVC" errorMessages={errorMessages.cvc}>
              <Input
                maxLength={3}
                placeholder="CVC"
                validate={validateCardCVC}
                handleErrorMessage={handleCVCError}
                onChange={value => {
                  setCardInput((prev: CardInputProps) => ({
                    ...prev,
                    CVC: value === '' ? null : Number(value),
                  }));
                }}
              />
            </InputGroup>
          </div>
        </div>
      );
    };

    return <Component />;
  },
};
