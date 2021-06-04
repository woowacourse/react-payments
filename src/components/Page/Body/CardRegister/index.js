import React, { useContext, useEffect } from 'react';
import * as Styled from './style.js';
import { Card } from '../../../Card';
import { CardCreateForm } from '../../../InputForm/CardCreateForm';
import { Modal } from '../../../Modal';
import { CardCompanyList } from '../../../Modal/ModalBody/CardCompanyList';
import { PaymentContext } from '../../../../contexts/PaymentContextProvider';
import { useCardCreateForm } from '../../../../hooks/useCardCreateForm.js';
import { useModal } from '../../../../hooks/useModal.js';

/**
 * Primary UI component for user interaction
 */

export const CardRegister = () => {
  const { setCurrentPage, registerCard } = useContext(PaymentContext);
  const { isModalOpened, openModal, closeModal } = useModal();
  const {
    formRef,
    company,
    numbers,
    validDay,
    owner,
    cvc,
    password,
    isValidEveryInput,
    hasSubmittedEveryInput,
  } = useCardCreateForm();

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    closeModal();
  }, [company.value]);

  const submitCardDetail = (e) => {
    e.preventDefault();

    const card = {
      company: company.value,
      numbers: numbers.value,
      validDay: validDay.value,
      owner: owner.value,
      cvc: cvc.value,
      password: password.value,
    };

    registerCard(card);
    setCurrentPage('cardRegistered');
  };

  return (
    <>
      <Styled.CardContainer>
        <Card
          size={'medium'}
          company={company.value}
          numbers={numbers.value}
          owner={owner.value}
          validDay={validDay.value}
          onClick={openModal}
        />
      </Styled.CardContainer>
      <Styled.CardCreateFormContainer>
        <CardCreateForm
          formRef={formRef}
          numbers={numbers}
          validDay={validDay}
          owner={owner}
          cvc={cvc}
          password={password}
          isValidEveryInput={isValidEveryInput() && hasSubmittedEveryInput()}
          submitCardDetail={submitCardDetail}
        />
      </Styled.CardCreateFormContainer>
      {isModalOpened && (
        <Modal handleModalClose={closeModal}>
          <CardCompanyList
            handleCompanyChange={company.handleChange}
            selectedCompany={company.value}
          />
        </Modal>
      )}
    </>
  );
};
