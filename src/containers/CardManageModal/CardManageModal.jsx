import ModalToast from 'common/Modal/ModalToast';
import styled from 'styled-components';
import RectangleButton from 'components/RectangleButton/RectangleButton';
import FlexColumnBox from 'components/FlexColumnBox/FlexColumnBox';

export default function CardManageModal({
  onCloseModal,
  onDeleteCard,
  onClickEditNickname,
  cardData,
}) {
  return (
    <ModalToast onCloseModal={onCloseModal}>
      <FlexColumnBox>
        <Styled.Title>카드 관리</Styled.Title>
        <Styled.CardInfoText>
          {`${cardData.cardName}(${cardData.cardNumber[3]}) ${cardData.cardNickname}`}
        </Styled.CardInfoText>
        <Styled.FlexBox>
          <RectangleButton onClick={onDeleteCard} colorType="delete">
            카드 삭제
          </RectangleButton>
          <RectangleButton onClick={onClickEditNickname}>카드명 수정</RectangleButton>
        </Styled.FlexBox>
      </FlexColumnBox>
    </ModalToast>
  );
}

const Styled = {
  FlexBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Title: styled.span`
    font-size: 25px;
    font-weight: bold;
  `,

  CardInfoText: styled.span`
    font-size: 20px;
    margin: 20px 0;
  `,
};
