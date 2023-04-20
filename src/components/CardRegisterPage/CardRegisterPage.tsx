import * as styled from './CardRegisterPage.styled';

const CardRegisterPage = () => {
  return (
    <styled.CardRegisterPage>
      <styled.CardRegisterButtonContainer>
        <p>새로운 카드를 등록해 주세요.</p>
        <styled.CardRegisterButton>+</styled.CardRegisterButton>
      </styled.CardRegisterButtonContainer>
      <styled.CardList>
        <styled.Card>
          <styled.Rectangle />
          <styled.CardInformationContainer>
            <styled.CardNumber>
              <span>1111</span>
              <span>2222</span>
              <span>3333</span>
              <span>4444</span>
            </styled.CardNumber>
            <styled.CardNameAndExpirationDateContainer>
              <styled.CardName>NAME</styled.CardName>
              <styled.ExpirationDate>MM/YY</styled.ExpirationDate>
            </styled.CardNameAndExpirationDateContainer>
          </styled.CardInformationContainer>
        </styled.Card>
        <styled.Card />
        <styled.Card />
        <styled.Card />
        <styled.Card />
        <styled.Card />
        <styled.Card />
      </styled.CardList>
    </styled.CardRegisterPage>
  );
};

export default CardRegisterPage;
