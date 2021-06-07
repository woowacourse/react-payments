import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';
import { GUIDE_MESSAGES } from '../../../../utils/constants/messages.js';
import { CardFormContext } from '../../../../contexts/CardFormContextProvider.js';
import { isEnglishTextType } from '../../../../utils/validators.js';

export const OwnerInputContainer = ({ type, maxLength }) => {
  const { owner, setOwner } = useContext(CardFormContext);

  const handleOwnerChange = (e) => {
    const inputValue = e.target.value;

    const filteredValue = Array.from(inputValue)
      .map((text) => (isEnglishTextType(text) ? text : ''))
      .join('');

    setOwner(filteredValue);
  };

  return (
    <Styled.Container>
      <Styled.Input
        value={owner}
        type={type}
        maxLength={maxLength}
        onChange={handleOwnerChange}
        placeholder={GUIDE_MESSAGES.OWNER_PLACEHOLDER}
      />
    </Styled.Container>
  );
};

OwnerInputContainer.propTypes = {
  type: PropTypes.string,
  maxLength: PropTypes.number,
};
