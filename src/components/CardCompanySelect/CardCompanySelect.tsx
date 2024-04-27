import { CARD_COMPANIES } from "../../constants/cardInformation";
import { CaptionText, SubTitleText } from "../atoms/text";
import * as S from "./style";

export type CardCompanyType = {
  value: string;
  ref: React.Ref;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

interface Props {
  cardCompany: CardCompanyType;
}

export default function CardCompanySelect({ cardCompany }: Props) {
  const cardCompanies = Object.values(CARD_COMPANIES).map(
    (company) => company.name
  );

  return (
    <S.Wrapper>
      <div>
        <SubTitleText>카드사를 선택해 주세요</SubTitleText>
        <CaptionText>현재 국내 카드사만 가능합니다.</CaptionText>
      </div>
      <S.Select
        ref={cardCompany.ref}
        name="cardCompany"
        onChange={cardCompany.onChange}
        defaultValue={""}
      >
        <option key={"default"} value="" disabled>
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
