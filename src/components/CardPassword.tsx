import FormItem from "./FormItem";
import SectionTitle from "./SectionTitle";
import { UseInputHookValue } from "../hooks/useInput";

export interface CardPassWordProps {
  passwordInput: UseInputHookValue;
}

export default function CardPassWord({ passwordInput }: CardPassWordProps) {
  return (
    <section>
      <SectionTitle
        title={"비밀번호를 입력해 주세요"}
        description={"앞의 2자리를 입력해 주세요"}
      />
      <FormItem
        labelText={"비밀번호 앞 2자리"}
        errorMessage={passwordInput.errorMessage}
      >
        <input
          type="password"
          placeholder={"00"}
          maxLength={2}
          onChange={passwordInput.onChangeHandler}
          onFocus={passwordInput.onFocusHandler}
          value={passwordInput.value}
          autoFocus
        />
      </FormItem>
    </section>
  );
}
