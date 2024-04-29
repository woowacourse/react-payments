import { memo } from "react";

import useContextWrapper from "../../hooks/useContextWrapper";
import { CardOwnerInfoContext } from "../../routes/Payments/CardInfoContextProvider";
import { CardOwnerInfoErrorContext } from "../../routes/Payments/FormContextProvider";

import { cardOwnerValidator } from "./validator/changeValidator";
import FormInputCompound from "./FormInputCompound";
import { CardCVCInputContext, CardOwnerInputContext } from "../Form/FormRefContextProvider";
import { cardOwnerBlurValidator } from "./validator/blurValidator";

interface InputInfoList {
  name: keyof CardOwnerInfo;
  placeholder: string;
}

const CardOwnerInput = memo(() => {
  const [cardOwner, setData] = useContextWrapper(CardOwnerInfoContext);
  const [ownerError, setError] = useContextWrapper(CardOwnerInfoErrorContext);
  const ownerInputRef = useContextWrapper(CardOwnerInputContext)[0];
  const nextRef = useContextWrapper(CardCVCInputContext)[0];

  const InputInfoList: InputInfoList[] = [{ name: "name", placeholder: "PARK JEONG-WOO" }];

  return (
    <>
      {InputInfoList.map(({ name, placeholder }, index) => (
        <FormInputCompound
          id={`id-owner-${name}`}
          key={index}
          setData={setData}
          setError={setError}
          changeValidator={cardOwnerValidator}
          blurValidator={cardOwnerBlurValidator}
          isError={!!ownerError[name]?.isError}
          sizePreset="large"
          maxLength={14}
          name={name}
          value={cardOwner[name] ?? ""}
          placeholder={placeholder}
          ref={ownerInputRef}
          nextRef={nextRef}
        />
      ))}
    </>
  );
});

export default CardOwnerInput;
