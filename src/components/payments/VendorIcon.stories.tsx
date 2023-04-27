import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { CreditCardVendorNames } from '../../domain/CreditCardVendor';
import { VendorIcon } from './VendorIcon';

const Container = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

const meta = {
  title: 'payments/VendorIcon',
  component: VendorIcon,
} satisfies Meta<typeof VendorIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = () => {
  return (
    <Container>
      {CreditCardVendorNames.map((vendor) => (
        <VendorIcon key={vendor} vendor={vendor} size={10} />
      ))}
    </Container>
  );
};
