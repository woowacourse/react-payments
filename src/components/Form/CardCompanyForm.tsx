import styled from "styled-components";
import { CARD_COMPANY } from "../../constants/card";
import FormElement from "../common/FormElement";
import { FormProps } from "./Form";
import useCardCompanyForm from "../../hooks/useCardCompanyForm";

const Styled = {
  CardCompanySelect: styled.select`
    width: 100%;
    padding: 8px;
    border: 1px solid #acacac;
    border-radius: 5px;
    color: ${(props) => (props.value ? "black" : "#acacac")};
  `,
};

export interface CardCompanyFormProps extends FormProps {
  labelContent: string;
  placeholders: string[];
  onValidation: (isValid: boolean) => void;
  onFocus: (field: string | null) => void;
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
      value={cardCompany && cardCompany.length > 0 ? cardCompany[0] : ""}
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
      errorMessage={isFocused ? "카드사를 선택해 주세요." : ""}
    />
  );
};

export default CardCompanyForm;
