import { useNavigate } from 'react-router-dom';
import * as styled from './MyCardPage.styled';

const MyCardPage = () => {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation('/register');
  };

  return (
    <styled.MyCardPage>
      <styled.CardRegisterButtonContainer>
        <p>새로운 카드를 등록해 주세요.</p>
        <styled.Card color="black" shadow="0" onClick={handleClick}>
          <styled.ButtonIcon>+</styled.ButtonIcon>
        </styled.Card>
      </styled.CardRegisterButtonContainer>
      <styled.CardList>
        <styled.Card bgColor="#333333">
          <styled.Rectangle />
          <styled.CardInformationContainer>
            <styled.CardNumber>
              <span>1111</span>
              <span>2222</span>
              <styled.EllipseContainer>
                <styled.Ellipse />
                <styled.Ellipse />
                <styled.Ellipse />
                <styled.Ellipse />
              </styled.EllipseContainer>
              <styled.EllipseContainer>
                <styled.Ellipse />
                <styled.Ellipse />
                <styled.Ellipse />
                <styled.Ellipse />
              </styled.EllipseContainer>
            </styled.CardNumber>
            <styled.CardNameAndExpirationDateContainer>
              <styled.CardName>NAME</styled.CardName>
              <styled.ExpirationDate>MM/YY</styled.ExpirationDate>
            </styled.CardNameAndExpirationDateContainer>
          </styled.CardInformationContainer>
        </styled.Card>
        <styled.Card bgColor="red">
          <styled.Rectangle />
          <styled.CardInformationContainer>
            <styled.CardNumber>
              <span>1111</span>
              <span>2222</span>
              <styled.EllipseContainer>
                <styled.Ellipse />
                <styled.Ellipse />
                <styled.Ellipse />
                <styled.Ellipse />
              </styled.EllipseContainer>
              <styled.EllipseContainer>
                <styled.Ellipse />
                <styled.Ellipse />
                <styled.Ellipse />
                <styled.Ellipse />
              </styled.EllipseContainer>
            </styled.CardNumber>
            <styled.CardNameAndExpirationDateContainer>
              <styled.CardName>NAME</styled.CardName>
              <styled.ExpirationDate>MM/YY</styled.ExpirationDate>
            </styled.CardNameAndExpirationDateContainer>
          </styled.CardInformationContainer>
        </styled.Card>
      </styled.CardList>
    </styled.MyCardPage>
  );
};

export default MyCardPage;
