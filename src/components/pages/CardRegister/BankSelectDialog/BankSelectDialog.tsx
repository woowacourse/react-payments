import React from 'react';
import Dialog from '../../../@common/Dialog/Dialog';
import { BANKS, BANKS_INFO } from '../../../../constants/banks';
import * as Styled from './BankSelectDialog.styles';

export default function BankSelectDialog() {
  return (
    <Dialog defaultOpen>
      <Dialog.Portal>
        <Dialog.BackDrop />
        <Dialog.Content asChild>
          <Styled.Content>
            {BANKS.map((bank) => (
              <Styled.Bank key={BANKS_INFO[bank].label}>
                {BANKS_INFO[bank].logo}
                <Styled.BankLabel>{BANKS_INFO[bank].label}</Styled.BankLabel>
              </Styled.Bank>
            ))}
          </Styled.Content>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
