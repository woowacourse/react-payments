import * as styled from './CardRegisterPage.styled';

import { useCardInfoValue } from '../../../context/CardInfoContext';
import useSwitch from '../../../hooks/useSwitch';

import { Header, CardPreview, Card, SelectBank } from '../../';
import { CardRegisterForm, NicknameForm } from '../../Form';
import { Modal } from '../../portal';

const CardRegisterPage = () => {
  const cardInfo = useCardInfoValue();
  const { state: showCardForm, turnOff: turnToNicknameForm } = useSwitch(true);
  const { state: showModal, turnOn: openModal, turnOff: closeModal } = useSwitch(true);

  return (
    <styled.CardRegisterPage>
      {showCardForm && <Header />}
      {showCardForm ? (
        <>
          <CardPreview openModal={openModal} />
          <CardRegisterForm showModal={showModal} turnToNicknameForm={turnToNicknameForm} />
        </>
      ) : (
        <styled.NicknameFormContainer>
          <styled.Title>곧 카드 등록이 완료됩니다!</styled.Title>
          <Card cardInfo={cardInfo} />
          <NicknameForm />
        </styled.NicknameFormContainer>
      )}
      {showModal && (
        <Modal closeModal={closeModal}>
          <SelectBank closeModal={closeModal} />
        </Modal>
      )}
    </styled.CardRegisterPage>
  );
};

export default CardRegisterPage;
