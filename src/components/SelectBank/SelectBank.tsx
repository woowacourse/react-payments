import { MouseEvent } from 'react';

import * as styled from './SelectBank.styled';

import { useCardInfoActions } from '../../context/CardInfoContext';

import { BANKS } from '../../constants';

interface Props {
  closeModal: () => void;
}

const SelectBank = ({ closeModal }: Props) => {
  const { setCardInfo } = useCardInfoActions();

  const onClick = ({ currentTarget: { id } }: MouseEvent<HTMLDivElement>) => {
    setCardInfo((prev) => ({ ...prev, bank: id }));
    closeModal();
  };

  return (
    <styled.SelectBank>
      <styled.Banks>
        {Object.keys(BANKS).map((key) => (
          <styled.Bank key={key} id={key} onClick={onClick}>
            <styled.Icon>
              <img src={BANKS[key].logo} alt={`${BANKS[key].name}_logo`} />
            </styled.Icon>
            <styled.Name>{BANKS[key].name}</styled.Name>
          </styled.Bank>
        ))}
      </styled.Banks>
    </styled.SelectBank>
  );
};

export default SelectBank;
