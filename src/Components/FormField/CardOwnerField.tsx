import useContextWrapper from "../../hooks/useContextWrapper";
import { CardOwnerInfoErrorContext } from "../Form/FormContextProvider";

import CardOwnerInput from "../FormInput/CardOwnerInput";
import FormFieldComponent from "./FormFieldComponent";

const CardOwnerField = () => {
  const cardOwnerError = useContextWrapper(CardOwnerInfoErrorContext)[0];
  const cardOwnerErrorKeys = Object.keys(cardOwnerError) as (keyof CardOwnerInfoError)[];
  const categoryHasError = cardOwnerErrorKeys.find((category) => {
    return cardOwnerError[category]?.errorMessage;
  });

  //TODO: 하위 input들의 Ref를 받고, Value들을 검증해서, 다음 렌더링으로 옮겨간다.

  return (
    <FormFieldComponent
      formFieldInfo={{
        title: "카드 소유자 이름을 입력해 주세요",
        description: "",
        label: "소유자 이름",
      }}
      errorMessage={categoryHasError ? cardOwnerError[categoryHasError]?.errorMessage : undefined}
    >
      <CardOwnerInput />
    </FormFieldComponent>
  );
};

export default CardOwnerField;
