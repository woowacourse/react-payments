import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../common/Input';
import useModal from '../../../hooks/useModal';
import Modal from '../../../common/Modal';
import CVCHelp from '../../ModalContents/CVCHelp';
import {
  CardCVCInputWrapper,
  InputLabel,
  InputAlert,
  InputMain,
  CVCContainer,
  Help,
} from './index.styles';

const CardCVCInput = ({
  cvc,
  errorMessage,
  onChangeCardInput,
  cardFormValidation,
}) => {
  const { isModalOpen, setIsModalOpen, onClickModalDimmed } = useModal();
  return (
    <CardCVCInputWrapper>
      <InputLabel>보안 코드(CVC/CVV)</InputLabel>
      <InputMain>
        <CVCContainer>
          <Input
            type='password'
            name='cvc'
            minLength='3'
            maxLength='3'
            value={cvc}
            onChange={onChangeCardInput}
            onBlur={cardFormValidation}
            required
          />
          <Help onClick={() => setIsModalOpen(true)}>?</Help>
        </CVCContainer>
      </InputMain>
      <InputAlert>{errorMessage}</InputAlert>
      <Modal isModalOpen={isModalOpen} onClickModalDimmed={onClickModalDimmed}>
        <CVCHelp />
      </Modal>
    </CardCVCInputWrapper>
  );
};

CardCVCInput.propTypes = {
  cvc: PropTypes.string,
  errorMessage: PropTypes.string,
  onChangeCardInput: PropTypes.func,
  setIsModalOpen: PropTypes.func,
  cardFormValidation: PropTypes.func,
};

export default CardCVCInput;
