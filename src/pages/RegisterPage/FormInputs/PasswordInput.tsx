import { useFocus } from "hooks/useFocus";
import { ChangeEvent, useState, Fragment } from "react";
import styled from "styled-components";
import { changeInvalidValueToBlank } from "utils/inputValidator";
import Input from "components/Input";
import { PasswordCaption } from "components/CaptionStyle";
import { PasswordInputBox } from "components/InputBoxStyle";
import {
  NUMBER_INPUT,
  LIMIT_LENGTH,
  PASSWORD_PART,
  VALID_INPUT,
} from "constants/limit";
const { ONLY_NUMBER } = VALID_INPUT;

interface Password {
  [key: string]: string;
  password1: string;
  password2: string;
}

const PasswordInput = () => {
  const { handleRef, moveFocus } = useFocus();

  const [password, setPassword] = useState<Password>({
    password1: "",
    password2: "",
  });

  const handlePassword = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setPassword((prevState) => {
      return {
        ...prevState,
        [target.name]: changeInvalidValueToBlank(target.value, {
          length: LIMIT_LENGTH.PASSWORD,
          regex: ONLY_NUMBER,
        }),
      };
    });

    moveFocus(target, LIMIT_LENGTH.PASSWORD);
  };

  return (
    <>
      <label className="label-text" htmlFor="password-label">
        카드 비밀번호
      </label>
      <PasswordInputBox>
        {Array.from({ length: NUMBER_INPUT.COUNT }).map((_, index) => (
          <Fragment key={index}>
            {index < PASSWORD_PART ? (
              <Input
                width="12%"
                margin="0 2.2% 0 0"
                borderRadius="8px"
                type="password"
                name={`password${index + 1}`}
                id={index ? undefined : "password-label"}
                aria-labelledby="password-label"
                maxLength={LIMIT_LENGTH.PASSWORD}
                inputMode="numeric"
                value={password[`password${index + 1}`]}
                placeholder="0"
                required
                onChange={handlePassword}
                ref={(el) => handleRef(el, index)}
              />
            ) : (
              <S.HiddenPassword>ㆍ</S.HiddenPassword>
            )}
          </Fragment>
        ))}
      </PasswordInputBox>
      <PasswordCaption password={Object.values(password)}>
        카드 비밀번호 앞 {LIMIT_LENGTH.PASSWORD}자리를 입력해 주세요.
      </PasswordCaption>
    </>
  );
};

const S = {
  HiddenPassword: styled.p`
    width: 12%;
    margin-right: 2.2%;
    font-size: 30px;
    text-align: center;
    line-height: 48px;
    border-radius: 8px;
  `,
};

export default PasswordInput;
