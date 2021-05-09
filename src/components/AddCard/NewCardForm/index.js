import React, { useState, useEffect } from 'react';

import { NewCardFormWrapper } from './index.styles';

import CardNumberInput from './CardNumberInput';
import CardExpireDateInput from './CardExpireDateInput';
import CardUserInput from './CardUserInput';
import CardCVCInput from './CardCVCInput';
import CardPasswordInput from './CardPasswordInput';

import CardColor from '../../ModalContents/CardColor';
import CVCHelp from '../../ModalContents/CVCHelp';

import { cardFormErrorMessages } from './cardFormValidator';
import { ERROR_MESSAGE, INPUT, MODAL, PAGE } from '../../../constants/constant';
import ButtonMenu from '../../mixin/ButtonMenu';
import Modal from '../../../common/Modal';
import { useContext } from 'react';
import { PageContext } from '../../../data/context/PageContext';
import { CardContext } from '../../../data/context/CardContext';
import { ModalContext } from '../../../data/context/ModalContext';

const NewCardForm = () => {
  const { cardInfo, setCardInfo } = useContext(CardContext);
  const { setPage } = useContext(PageContext);
  const { modal, onOpenModal, onCloseModal } = useContext(ModalContext);

  const [cardFormFilled, setCardFormFilled] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    numbers: '',
    expireDate: '',
    user: '',
    cvc: '',
    password: '',
  });

  const addCardColor = (name) => {
    setCardInfo({
      ...cardInfo,
      cardName: name,
    });
    onCloseModal();
  };

  const onChangeCardInput = ({
    target: {
      name,
      value,
      dataset: { detail },
    },
  }) => {
    const message = cardFormErrorMessages[name](value);

    setErrorMessage({
      ...errorMessage,
      [name]: message,
    });

    if (message !== '') return;

    detail
      ? setCardInfo((prevInfo) => ({
          ...prevInfo,
          [name]: { ...prevInfo[name], [detail]: value },
        }))
      : setCardInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const cardFormFilledValidation = () => {
    const { numbers, expireDate, password, cvc } = cardInfo;
    const isFilled =
      Object.values(numbers).every(
        (number) => number.length === INPUT.MAX_LENGTH.CARD.NUMBERS
      ) &&
      Object.values(expireDate).every(
        (date) => date.length === INPUT.MAX_LENGTH.CARD.EXPIRE_DATE
      ) &&
      Object.values(password).every(
        (pwd) => pwd.length === INPUT.MAX_LENGTH.CARD.PASSWORD
      ) &&
      cvc.length === INPUT.MAX_LENGTH.CARD.CVC;

    setCardFormFilled(isFilled);
  };

  const onSubmitCardForm = (e) => {
    e.preventDefault();

    if (cardInfo.cardName === '') {
      alert(ERROR_MESSAGE.CHOOSE_CARD);
      return;
    }

    setPage(PAGE.CARD_COMPLETE);
  };

  useEffect(() => {
    cardFormFilledValidation();
  }, [cardInfo]);

  useEffect(() => {
    onOpenModal(MODAL.CARD_COLOR);
  }, []);

  const { numbers, expireDate, user, cvc, password } = cardInfo;
  return (
    <>
      <NewCardFormWrapper onSubmit={onSubmitCardForm}>
        <CardNumberInput
          numbers={numbers}
          errorMessage={errorMessage.numbers}
          onChangeCardInput={onChangeCardInput}
        />
        <CardExpireDateInput
          expireDate={expireDate}
          errorMessage={errorMessage.expireDate}
          onChangeCardInput={onChangeCardInput}
        />
        <CardUserInput
          user={user}
          errorMessage={errorMessage.user}
          onChangeCardInput={onChangeCardInput}
        />
        <CardCVCInput
          cvc={cvc}
          errorMessage={errorMessage.cvc}
          onChangeCardInput={onChangeCardInput}
          onOpenModal={onOpenModal}
        />
        <CardPasswordInput
          password={password}
          errorMessage={errorMessage.password}
          onChangeCardInput={onChangeCardInput}
        />
        <ButtonMenu visible={cardFormFilled}>다음</ButtonMenu>
      </NewCardFormWrapper>
      {modal.isModalOpen && (
        <Modal onCloseModal={onCloseModal}>
          <>
            {modal.modalContent === MODAL.CARD_COLOR && (
              <CardColor addCardColor={addCardColor} />
            )}
            {modal.modalContent === MODAL.CVC_HELP && <CVCHelp />}
          </>
        </Modal>
      )}
    </>
  );
};

export default NewCardForm;
