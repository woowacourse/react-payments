import React from 'react';
import PropTypes from 'prop-types';
import * as Style from './style';
import CardColorOption from '../CardColorOption';
import { dummyBanks } from '../../../mockData';

const CardSelector = (props) => {
  const { setBankId, setSelectorOpened } = props;

  const handleSelectColor = (event) => {
    setBankId(event.target.dataset.bankId);
    setSelectorOpened(false);
  };

  return (
    <Style.Root>
      <Style.SelectorInner>
        {dummyBanks.map((bank) => (
          <CardColorOption key={bank.id} bankId={bank.id} onClickOption={handleSelectColor} />
        ))}
      </Style.SelectorInner>
    </Style.Root>
  );
};

export default CardSelector;

CardSelector.propTypes = {
  setBankId: PropTypes.func.isRequired,
  setSelectorOpened: PropTypes.func.isRequired,
};
