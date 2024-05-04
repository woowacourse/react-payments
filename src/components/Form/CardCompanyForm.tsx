import styled from "styled-components";
import { CARD_COMPANY } from "../../constants/card";
import FormElement from "../common/FormElement";
import useCardCompanyForm from "../../hooks/useCardCompanyForm";
import { CardCompany } from "../../types/card";

const Styled = {
  CardCompanySelect: styled.select`
    width: 100%;
    padding: 8px;
    border: 1px solid #acacac;
    border-radius: 5px;
    color: ${(props) => (props.value ? "black" : "#acacac")};
  `,
};

export interface CardCompanyFormProps {
  labelContent: string;
  placeholders: string[];
  cardCompany: CardCompany | null;
  setCardCompany: React.Dispatch<React.SetStateAction<CardCompany | null>>;
  onValidation: (isValid: boolean) => void;
  onFocus: (field: string) => void;
}

const CardCompanyForm = ({
  labelContent,
  placeholders,
  cardCompany,
  setCardCompany,
  onValidation,
  onFocus,
}: CardCompanyFormProps) => {
  const { isFocused, handleFocus, handleCompanyChange } = useCardCompanyForm({
    cardCompany,
    setCardCompany,
    onValidation,
    onFocus,
  });

  const select = (
    <Styled.CardCompanySelect
      value={cardCompany ? cardCompany : ""}
      onChange={handleCompanyChange}
      onFocus={() => handleFocus("cardCompany")}
    >
      <option disabled hidden value="">
        {placeholders}
      </option>
      {Object.keys(CARD_COMPANY).map((company) => {
        return (
          <option key={company} value={company}>
            {company}
          </option>
        );
      })}
    </Styled.CardCompanySelect>
  );

  return (
    <FormElement
      labelContent={labelContent}
      inputs={select}
      errorMessage={isFocused && !cardCompany ? "카드사를 선택해 주세요." : ""}
    />
  );
};

export default CardCompanyForm;
