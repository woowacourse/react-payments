import type { ComponentProps } from 'react';
import styled from 'styled-components';
import type { CreditCardVendorName } from '../../domain/CreditCardVendor';
import { CreditCardVendorNames } from '../../domain/CreditCardVendor';

import { BottomSheet } from '../common/BottomSheet';
import { Text } from '../common/Text';
import { VendorIcon } from './VendorIcon';

const BottomSheetContent = styled.div`
  display: flex;
  justify-content: center;
`;

const VendorButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 26px;

  margin: 16px;
`;

const VendorButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

type NewCreditCardVendorBottomSheetProps = ComponentProps<typeof BottomSheet> & {
  onClickVendor?: (vendor: CreditCardVendorName) => void;
};

export const NewCreditCardVendorBottomSheet = (props: NewCreditCardVendorBottomSheetProps) => {
  const { onClickVendor, ...bottomSheetProps } = props;

  return (
    <BottomSheet {...bottomSheetProps}>
      <BottomSheetContent>
        <VendorButtonGroup>
          {CreditCardVendorNames.map((vendor) => (
            <VendorButton key={vendor} onClick={() => onClickVendor?.(vendor)}>
              <VendorIcon vendor={vendor} size={4.5} />

              <Text size="small">{vendor}</Text>
            </VendorButton>
          ))}
        </VendorButtonGroup>
      </BottomSheetContent>
    </BottomSheet>
  );
};
