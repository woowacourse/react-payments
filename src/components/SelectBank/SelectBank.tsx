import { MouseEvent } from 'react';

import * as styled from './SelectBank.styled';

import { useCardInfoActions } from '../../context/CardInfoContext';

import { BANKS } from '../../constants';

const SelectBank = () => {
  const { setCardInfo } = useCardInfoActions();

  const onClick = ({ currentTarget: { id } }: MouseEvent<HTMLDivElement>) => {
    setCardInfo((prev) => ({ ...prev, bank: id }));
  };

  return (
    <styled.SelectBank>
      <styled.Banks>
        {Object.entries(BANKS).map(([key, bank]) => (
          <styled.Bank key={key} id={key} onClick={onClick} className="bank">
            <styled.Icon>
              <img src={bank.logo} alt={`${bank.name}_logo`} />
            </styled.Icon>
            <styled.Name>{bank.name}</styled.Name>
          </styled.Bank>
        ))}
      </styled.Banks>
    </styled.SelectBank>
  );
};

export default SelectBank;
