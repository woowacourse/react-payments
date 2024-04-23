import { CARD_COMPANIES } from "../../constants/cardInformation";
import { CaptionText, TitleText } from "../atoms/text";
import * as S from "./style";

interface Props {
  cardCompany: CardInfoValue;
  onChangeCardInfo: (inputValue: CardInfoValue, inputId: string) => void;
}

export default function CardCompanySelect({
  cardCompany,
  onChangeCardInfo,
}: Props) {
  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const newSelectValue = cardCompany;

    newSelectValue.value = value;
    onChangeCardInfo(newSelectValue, "cardCompany");
  };
  const cardCompanies = Object.values(CARD_COMPANIES).map(
    (company) => company.name
  );

  return (
    <S.Wrapper>
      <div>
        <TitleText>카드사를 선택해 주세요</TitleText>
        <CaptionText>현재 국내 카드사만 가능합니다.</CaptionText>
      </div>
      <S.Select onChange={onChangeSelect} defaultValue={""}>
        <option key={"default"} value="">
          카드사를 선택해주세요.
        </option>
        {cardCompanies.map((cardCompany) => {
          return (
            <option key={cardCompany} value={cardCompany}>
              {cardCompany}
            </option>
          );
        })}
      </S.Select>
    </S.Wrapper>
  );
}
