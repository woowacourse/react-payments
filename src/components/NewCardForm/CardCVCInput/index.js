import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../common/Input';
import { CardCVCInputWrapper } from './index.styles';
import { INPUT, MODAL } from '../../../constants/constant';

const CardCVCInput = ({
  cvc,
  errorMessage,
  onChangeCardInput,
  handleModalOpen,
  cardFormValidation,
}) => {
  const onClickCVCHelp = () => {
    handleModalOpen(MODAL.CVC_HELP);
  };

  return (
    <CardCVCInputWrapper>
      <div className='input-label'>보안 코드(CVC/CVV)</div>
      <div className='input-main cvc-container'>
        <Input
          type='password'
          name={INPUT.NAME.CARD.CVC}
          minLength={INPUT.MAX_LENGTH.CARD.CVC}
          maxLength={INPUT.MAX_LENGTH.CARD.CVC}
          value={cvc}
          onChange={onChangeCardInput}
          onBlur={cardFormValidation}
          required
        />
        <div className='help' onClick={onClickCVCHelp}>
          ?
        </div>
      </div>
      <div className='input-alert'>{errorMessage}</div>
    </CardCVCInputWrapper>
  );
};

CardCVCInput.propTypes = {
  cvc: PropTypes.string,
  errorMessage: PropTypes.string,
  onChangeCardInput: PropTypes.func,
  handleModalOpen: PropTypes.func,
  cardFormValidation: PropTypes.func,
};

export default CardCVCInput;
