import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import styled from 'styled-components';
import { CREDIT_CARD_VENDOR_BRAND_COLORS } from '../../domain/CreditCardBrandColors';
import { CREDIT_CARD_VENDORS } from '../../domain/CreditCardVendor';
import { Button } from '../common/Button';
import { CreditCardView } from './CreditCardView';
import { VendorIcon } from './VendorIcon';

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const CreditCardGrid = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const meta = {
  title: 'payments/CreditCardView',
  component: CreditCardView,
} satisfies Meta<typeof CreditCardView>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    owner: '엽토카드',
    vendor: '국민카드',
    cardNumbers: '1212-3434-5656-7878',
    expirationDate: ['12', '24'],
    cvc: '982',
    color: '#f04651',
  },
};

export const WithIcon: Story = {
  args: {
    owner: '엽토카드',
    vendor: '국민카드',
    cardNumbers: '1212-3434-5656-7878',
    expirationDate: ['12', '24'],
    cvc: '982',
    color: '#f04651',
    icon: <VendorIcon vendor="국민카드" />,
  },
};

export const WithBackface: Story = {
  args: {
    owner: '엽토카드',
    vendor: '국민카드',
    cardNumbers: '1212-3434-5656-7878',
    expirationDate: ['12', '24'],
    cvc: '982',
    color: '#f04651',
    icon: <VendorIcon vendor="국민카드" />,
    showBackface: true,
  },
};

export const WithVendor = () => {
  const [showBackface, setShowBackface] = useState(false);
  const handleClickFlipButton = () => {
    setShowBackface(!showBackface);
  };
  return (
    <Container>
      <CreditCardGrid>
        {CREDIT_CARD_VENDORS.map((vendor) => (
          <CreditCardView
            key={vendor}
            owner="NOAH"
            vendor={vendor}
            cardNumbers="1290-9072-3345-2081"
            expirationDate={['6', '25']}
            cvc="127"
            color={CREDIT_CARD_VENDOR_BRAND_COLORS[vendor]}
            icon={<VendorIcon vendor={vendor} />}
            showBackface={showBackface}
          />
        ))}
      </CreditCardGrid>
      <Button onClick={handleClickFlipButton}>뒤집기</Button>
    </Container>
  );
};

export default meta;
