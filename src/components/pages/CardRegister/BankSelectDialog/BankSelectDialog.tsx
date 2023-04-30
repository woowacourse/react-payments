import React from 'react';
import Dialog from '../../../@common/Dialog/Dialog';
import { BANKS, BANKS_INFO } from '../../../../constants/banks';
import * as Styled from './BankSelectDialog.styles';
import { Bank } from '../../../../types/card.type';

interface BankSelectDialogProps {
  onClick(bank: Bank): void;
}

export default function BankSelectDialog({ onClick: selectBank }: BankSelectDialogProps) {
  return (
    <Dialog defaultOpen>
      <Dialog.Portal>
        <Dialog.BackDrop />
        <Dialog.Content asChild>
          <Styled.Content>
            {BANKS.map((bank) => (
              <Dialog.Close asChild key={BANKS_INFO[bank].label} onClick={() => selectBank(BANKS_INFO[bank])}>
                <Styled.Bank>
                  {BANKS_INFO[bank].logo}
                  <Styled.BankLabel>{BANKS_INFO[bank].label}</Styled.BankLabel>
                </Styled.Bank>
              </Dialog.Close>
            ))}
          </Styled.Content>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
