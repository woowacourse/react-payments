import PropTypes from "prop-types";
import InputBox from "components/InputBox";
import { Input } from "components/Input/style";
import { CardInputWrapper } from "pages/style";
import { PasswordWrapper, Dot } from "./style";

function CardPasswordInput({
  password,
  handleChangePassword,
  secondPasswordInputRef,
}) {
  return (
    <CardInputWrapper>
      <label>카드 비밀번호</label>
      <PasswordWrapper>
        <InputBox size="12">
          <Input
            type="password"
            name="firstPassword"
            value={password.firstPassword}
            onChange={handleChangePassword}
            data-testid="first-password"
          />
        </InputBox>
        <InputBox size="12">
          <Input
            type="password"
            name="secondPassword"
            ref={secondPasswordInputRef}
            value={password.secondPassword}
            onChange={handleChangePassword}
            data-testid="second-password"
          />
        </InputBox>
        <Dot>•</Dot>
        <Dot>•</Dot>
      </PasswordWrapper>
    </CardInputWrapper>
  );
}

CardPasswordInput.propTypes = {
  password: PropTypes.shape({
    firstPassword: PropTypes.string,
    secondPassword: PropTypes.string,
  }),
  secondPasswordInputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  handleChangePassword: PropTypes.func,
};

export default CardPasswordInput;
