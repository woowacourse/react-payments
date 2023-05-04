import Card from "src/components/@common/Temp";
import Input from "src/components/@common/Input";
import useSaveNickName from "src/hooks/useSaveNickName";
import { Styled as S } from "./CardNickName.styles";

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
        <S.NickNameContainer>
          <S.Title>카드 등록이 완료되었습니다.</S.Title>
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
            customInputStyle={S.NickNameInput}
          />
          <S.ButtonContainer>
            <S.NextButton onClick={registerCard}>확인</S.NextButton>
          </S.ButtonContainer>
        </S.NickNameContainer>
      }
    </>
  );
}

export default CardNickName;
