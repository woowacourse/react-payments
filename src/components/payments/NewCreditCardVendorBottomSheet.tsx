import { Modal } from '@solo5star/react-modal';
import type { ComponentProps } from 'react';
import styled from 'styled-components';
import type { CreditCardVendor } from '../../domain/CreditCardVendor';
import { CREDIT_CARD_VENDORS } from '../../domain/CreditCardVendor';
import { Text } from '../common/Text';
import { VendorIcon } from './VendorIcon';

const BottomSheet = {
  ...Modal,
  Content: styled(Modal.Content)`
    display: flex;
    justify-content: center;

    width: 100%;

    padding: 16px;
    padding-bottom: 24px;

    border-radius: 5px 5px 0 0;
    background: ${(props) => props.theme.color.grey1};
  `,
};

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

type NewCreditCardVendorBottomSheetProps = ComponentProps<typeof Modal.Root> & {
  onClickVendor?: (vendor: CreditCardVendor) => void;
};

export const NewCreditCardVendorBottomSheet = (props: NewCreditCardVendorBottomSheetProps) => {
  const { open, onClose, onClickVendor } = props;

  return (
    <BottomSheet.Root open={open} onClose={onClose}>
      <BottomSheet.Backdrop onClick={onClose} />
      <BottomSheet.Content placement="bottom">
        <VendorButtonGroup>
          {CREDIT_CARD_VENDORS.map((vendor) => (
            <VendorButton key={vendor} onClick={() => onClickVendor?.(vendor)}>
              <VendorIcon vendor={vendor} size={4.5} />

              <Text size="small">{vendor}</Text>
            </VendorButton>
          ))}
        </VendorButtonGroup>
      </BottomSheet.Content>
    </BottomSheet.Root>
  );
};
