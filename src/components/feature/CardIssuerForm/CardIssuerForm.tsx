import { css } from "@emotion/react";
import Text from "../../common/Text/Text";
import cardIssuerSpec from "./CardIssuerSpec";
import Select from "../../common/Select/Select";
import { CardIssuerStateType } from "../../../types/CardInformationType";

const CardIssuerForm = ({ cardIssuerState, dispatch, openNextForm }: CardIssuerStateType) => {
  const { title, description, optionList } = cardIssuerSpec;

  return (
    <div css={FormSectionWrapperStyle}>
      <div css={TextWrapperStyle}>
        <Text text={title} size="18px" color="#000" weight={700} lineHeight="normal" />
        <Text text={description} size="9.5px" color="#8b95a1" weight={400} lineHeight="normal" />
      </div>
      <div css={inputFieldStyle}>
        <Select
          value={cardIssuerState[0]}
          setValue={(value) => {
            dispatch({ type: "SET_CARD_ISSUER", value: value });
            openNextForm();
          }}
          optionList={optionList}
        />
      </div>
    </div>
  );
};

const inputFieldStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const TextWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FormSectionWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default CardIssuerForm;
