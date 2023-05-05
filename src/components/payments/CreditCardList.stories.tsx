import type { Meta, StoryObj } from '@storybook/react';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import type { CreditCard } from '../../domain/CreditCard';
import creditCards from '../../fixtures/creditCards.json';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { CreditCardList } from './CreditCardList';
import { NewCreditCardButton } from './NewCreditCardButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 24px;
`;

const CreditCardListBottom = styled.div`
  padding-bottom: 16px;

  position: sticky;
  bottom: -1px;
  z-index: 2;
`;

const meta = {
  title: 'payments/CreditCardList',
  component: CreditCardList,
} satisfies Meta<typeof CreditCardList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    creditCards: (creditCards as CreditCard[]).slice(0, 3),
  },
};

export const WithManyItems: Story = {
  args: {
    creditCards: creditCards as CreditCard[],
  },
};

export const WithNewCreditCardButton: Story = {
  args: {
    creditCards: creditCards as CreditCard[],
  },
  render: (args) => {
    const bottomRef = useRef<HTMLDivElement>(null);
    const [isBottomSticky, setIsBottomSticky] = useState(false);

    useIntersectionObserver(bottomRef, (isIntersecting: boolean) => {
      setIsBottomSticky(!isIntersecting);
    });

    return (
      <Container>
        <CreditCardList {...args} />
        <CreditCardListBottom ref={bottomRef}>
          <NewCreditCardButton rounded={isBottomSticky} />
        </CreditCardListBottom>
      </Container>
    );
  },
};
