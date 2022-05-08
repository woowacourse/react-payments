import { useContext } from 'react';

import styled from 'styled-components';
import { CARD_TYPES, COMPONENTS, initialCardInfo } from '../../constants/card';
import { useModalSelector } from '../../hooks/useModalSelector';
import ModalPortal from '../../Portal';
import { CardInfoContext } from '../../providers/CardInfoProvider';

import { Button } from '../common/Button';
import { PageTitle } from '../common/PageTitle';
import { CardExpireDateInput } from './CardExpireDateInput';
import { CardNumbersInput } from './CardNumbersInput';
import { CardOwnerInput } from './CardOwnerInput';
import { CardPasswordInput } from './CardPasswordInput';
import { CardPreview } from './CardPreview';
import { CardSelectModal } from './CardSelectModal';
import { CVCHelperModal } from './CVCHelperModal';
import { CVCInput } from './CVCInput';

export const CardRegister = ({ onSubmit }) => {
  const context = useContext(CardInfoContext);

  const [openedModalComponent, openModal, closeModal] = useModalSelector();

  const allCompleted = Object.values(context.checkInputCompleted).every(
    (check) => check
  );

  return (
    <>
      <PageTitle>카드 추가</PageTitle>
      <CardPreview
        cardInfo={initialCardInfo}
        onClickCard={() => openModal(COMPONENTS.CARD_TYPE)}
      />
      <CardNumbersInput openModal={() => openModal(COMPONENTS.CARD_TYPE)} />
      <CardExpireDateInput />
      <CardOwnerInput />
      <CVCInput openModal={() => openModal(COMPONENTS.CVC)} />
      <CardPasswordInput />
      <ModalPortal selected={openedModalComponent} closeModal={closeModal}>
        <CardSelectModal
          name={COMPONENTS.CARD_TYPE}
          cardTypes={CARD_TYPES}
          closeModal={closeModal}
        />
        <CVCHelperModal name={COMPONENTS.CVC} />
      </ModalPortal>

      <Style.ButtonWrapper>
        <Button disabled={allCompleted ? false : true} onClick={onSubmit}>
          다음
        </Button>
      </Style.ButtonWrapper>
    </>
  );
};

const Style = {
  ButtonWrapper: styled.div`
    width: 100%;
    text-align: right;
  `,
};
