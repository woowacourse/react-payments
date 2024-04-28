import FormItem from "./FormItem";
import SectionTitle from "./SectionTitle";
import { UseInputHookValue } from "../hooks/useInput";

export interface CardCvcNumberProps {
  cvcInput: UseInputHookValue;
}

export default function CardCvcNumber({ cvcInput }: CardCvcNumberProps) {
  return (
    <section>
      <SectionTitle title={"CVC 번호를 입력해 주세요"} />
      <FormItem labelText={"CVC"} errorMessage={cvcInput.errorMessage}>
        {
          <input
            type="text"
            placeholder={"123"}
            maxLength={3}
            onChange={cvcInput.onChangeHandler}
            onFocus={cvcInput.onFocusHandler}
            value={cvcInput.value}
            autoFocus
          />
        }
      </FormItem>
    </section>
  );
}
