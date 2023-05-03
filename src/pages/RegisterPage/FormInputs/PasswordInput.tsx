import { ChangeEvent, Fragment } from "react";
import styled from "styled-components";
import { Password } from "types";
import { changeInvalidValueToBlank } from "utils/inputValidator";
import Input, { PasswordInputStyle } from "components/Input";
import { PasswordCaption } from "components/style/CaptionStyle";
import { PasswordInputBox } from "components/style/InputBoxStyle";
import useInitCardInfo from "hooks/useInitCardInfo";
import {
  NUMBER_INPUT,
  LIMIT_LENGTH,
  PASSWORD_PART,
  VALID_INPUT,
} from "constants/limit";
const { ONLY_NUMBER } = VALID_INPUT;

const PasswordInput = () => {
  const { cardInfo, initCardInfo } = useInitCardInfo();
  const { password1, password2 } = cardInfo;
  const password: Password = { password1, password2 };

  const handlePasswordChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    initCardInfo(
      target.name,
      changeInvalidValueToBlank(target.value, {
        length: LIMIT_LENGTH.PASSWORD,
        regex: ONLY_NUMBER,
      })
    );
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
                type="password"
                name={`password${index + 1}`}
                id={index ? undefined : "password-label"}
                aria-labelledby="password-label"
                maxLength={LIMIT_LENGTH.PASSWORD}
                inputMode="numeric"
                value={password[`password${index + 1}`]}
                placeholder="0"
                required
                inputStyle={PasswordInputStyle}
                onChange={handlePasswordChange}
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
