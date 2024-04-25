import { theme } from "@/style/theme";
import S from "./style";

const CardPreviewBack = ({ CVCNumbers }: { CVCNumbers: string }) => {
  return (
    <S.CardWrapper $cardTypeColor={theme.COLOR["grey-5"]}>
      <S.CardCVCPart>
        <S.CVCNumberBox>
          <S.Input type="text" value={CVCNumbers} readOnly></S.Input>
        </S.CVCNumberBox>
      </S.CardCVCPart>
    </S.CardWrapper>
  );
};

export default CardPreviewBack;
