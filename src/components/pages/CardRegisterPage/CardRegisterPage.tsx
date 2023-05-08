import * as styled from './CardRegisterPage.styled';

import { useCardInfoValue } from '../../../context/CardInfoContext';
import useSwitch from '../../../hooks/useSwitch';

import { Header, CardPreview, Card, SelectBank } from '../../';
import { CardRegisterForm, NicknameForm } from '../../Form';

import { Modal } from 'react-reusable-modal';

const CardRegisterPage = () => {
  const cardInfo = useCardInfoValue();
  const { state: showCardForm, turnOff: turnToNicknameForm } = useSwitch(true);

  const modalOptions = {
    position: 'bottom' as const,
    closeTrigger: 'bank' as const,
    initState: true,
  };

  return (
    <styled.CardRegisterPage>
      {showCardForm && <Header />}
      {showCardForm ? (
        <>
          <Modal trigger={<CardPreview />} options={modalOptions}>
            <SelectBank />
          </Modal>
          <CardRegisterForm turnToNicknameForm={turnToNicknameForm} />
        </>
      ) : (
        <styled.NicknameFormContainer>
          <styled.Title>곧 카드 등록이 완료됩니다!</styled.Title>
          <Card cardInfo={cardInfo} />
          <NicknameForm />
        </styled.NicknameFormContainer>
      )}
    </styled.CardRegisterPage>
  );
};

export default CardRegisterPage;
