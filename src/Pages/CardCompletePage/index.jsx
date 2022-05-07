import { useContext, useEffect } from 'react';
import { CardContext } from 'context/CardContext';
import styled from 'styled-components';
import Card from 'components/Modules/Card';
import CardNickNameForm from 'components/Templates/CardNickNameForm';
import { useNavigate } from 'react-router-dom';
import CardDeleteButton from 'components/Atoms/CardDeleteButton';
import { LINK } from '../../constant/Link';
import { MESSAGE } from '../../constant/message';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 27px;
  margin-top: 130px;
`;

const Title = styled.p`
  margin-bottom: 77px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
`;

const CardSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 33px;
`;

function CardCompletePage() {
  const navigator = useNavigate();
  const { inputtedInfo } = useContext(CardContext);

  useEffect(() => {
    if (Object.keys(inputtedInfo).length === 0) {
      alert(MESSAGE.INVALID_ACCESS);
      navigator(LINK.CARD_LIST_PAGE);
      return;
    }
  }, []);

  return (
    <Page>
      <Title>카드등록이 완료되었습니다.</Title>
      <CardSection>
        <Card {...inputtedInfo} disable={true} />
      </CardSection>
      <CardNickNameForm link={LINK.CARD_LIST_PAGE} />
      <CardDeleteButton>카드삭제</CardDeleteButton>
    </Page>
  );
}

export default CardCompletePage;
