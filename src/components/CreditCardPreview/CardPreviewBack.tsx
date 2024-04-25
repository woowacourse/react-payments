import { theme } from "@/style/theme";
import S from "./style";

const CardPreviewBack = ({ CVCNumbers }: { CVCNumbers: string }) => {
  return (
    <S.CardInner $cardTypeColor={theme.COLOR["grey-5"]} $isFront={false}>
      <S.CardCVCPart>
        <S.CVCNumberBox>
          <S.Input
            isWhite={false}
            type="text"
            value={CVCNumbers}
            readOnly
          ></S.Input>
        </S.CVCNumberBox>
      </S.CardCVCPart>
    </S.CardInner>
  );
};

export default CardPreviewBack;
