import React, { useContext, useEffect, useState } from 'react';

import { Card } from '../../../Card';
import { Modal } from '../../../Modal';
import { CardCreateForm } from '../../../InputForm/CardCreateForm';
import { CardCompanyList } from '../../../Modal/ModalBody/CardCompanyList';

import { CardContext } from '../../../../contexts/CardContextProvider.js';
import { CardFormContext } from '../../../../contexts/CardFormContextProvider';

import { PageBody } from '../../../../utils/style/Page.js';
import * as Styled from './style.js';

export const CardRegister = () => {
  const { resetCurrentCard } = useContext(CardContext);
  const { company, numbers, validDay, owner } = useContext(CardFormContext);

  const [isModalOpened, setIsModalOpened] = useState(false);

  useEffect(() => {
    resetCurrentCard();
  }, [resetCurrentCard]);

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  return (
    <PageBody>
      <Styled.CardContainer>
        <Card
          size={'medium'}
          company={company}
          numbers={numbers}
          owner={owner}
          validDay={validDay}
          onClick={openModal}
        />
      </Styled.CardContainer>
      <Styled.CardCreateFormContainer>
        <CardCreateForm />
      </Styled.CardCreateFormContainer>
      {isModalOpened && (
        <Modal handleModalClose={closeModal}>
          <CardCompanyList />
        </Modal>
      )}
    </PageBody>
  );
};
