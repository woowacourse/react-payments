import React from 'react';
import * as Style from './style';
import CardColorOption from '../CardColorOption';
import { dummyBanks } from '../../../mockData';

const CardSelector = (props) => {
  return (
    <Style.Root>
      <Style.SelectorInner>
        {dummyBanks.map((bank) => (
          <CardColorOption key={bank.id} color={bank.color} bankName={bank.name} />
        ))}
      </Style.SelectorInner>
    </Style.Root>
  );
};

export default CardSelector;
