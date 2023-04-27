import Card from "src/components/@common/Card";
import Input from "src/components/@common/Input";
import useSaveNickName from "src/hooks/useSaveNickName";
import styled, { css } from "styled-components";

function CardNickName() {
  const {
    cardName,
    cardNumbers,
    ownerName,
    expireDate,
    nickName,
    onChange,
    registerCard,
  } = useSaveNickName();

  return (
    <>
      {
        <Styled.NickNameContainer>
          <Styled.Title>카드 등록이 완료되었습니다.</Styled.Title>
          <Card
            cardName={cardName}
            cardNumber={cardNumbers}
            ownerName={ownerName}
            expireDate={expireDate}
          />
          <Input
            type="text"
            value={nickName}
            onChange={onChange}
            customInputStyle={Styled.NickNameInput}
          />
          <Styled.ButtonContainer>
            <Styled.NextButton onClick={registerCard}>확인</Styled.NextButton>
          </Styled.ButtonContainer>
        </Styled.NickNameContainer>
      }
    </>
  );
}

export default CardNickName;

const Styled = {
  NickNameContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 130px auto 0 auto;
    width: 375px;
  `,

  Title: styled.span`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;

    color: var(--label-color);
  `,

  NickNameInput: css`
    width: 240px;

    background: none;

    margin: 100px 0 0 0;

    border: none;
    border-bottom: solid #737373 1.5px;
    border-radius: 0;

    text-align: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    color: #383838;

    &:focus {
      outline: none;
    }
  `,

  ButtonContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    margin: 119px 0 20px 0;
  `,

  NextButton: styled.button`
    width: 51px;

    background: none;
    border: none;

    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    &:hover {
      cursor: pointer;
    }
  `,
};
