import { theme } from "@/style/theme";
import S from "./style";

const CardPreviewBack = ({ CVCNumbers }: { CVCNumbers: string }) => {
  return (
    <S.CardWrapper $cardTypeColor={theme.COLOR["grey-5"]}>
      <S.CreditCardInfo>
        <S.CardNumbers></S.CardNumbers>

        <S.Input type="text" value={CVCNumbers} readOnly></S.Input>
      </S.CreditCardInfo>
    </S.CardWrapper>
  );
};

export default CardPreviewBack;
