import { useContext, useEffect } from 'react';
import { CardContext, CardContextValue } from 'context/CardContext';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { LINK } from '../../constant/Link';
import { MESSAGE } from '../../constant/message';
import CardDeleteButtonContainer from 'containers/Button/CardDeleteButtonContainer';
import CardContainer from 'containers/Card/CardContainer';
import CardNameFormContainer from 'containers/Form/CardNameFormContainer';

function CardCompletePage() {
  const navigator = useNavigate();
  const { inputtedInfo } = useContext(CardContext) as CardContextValue;

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
        <CardContainer {...inputtedInfo} disable={true} />
      </CardSection>
      <CardNameFormContainer link={LINK.CARD_LIST_PAGE} />
      <CardDeleteButtonContainer />
    </Page>
  );
}

export default CardCompletePage;

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
