import PropTypes from "prop-types";
import InputBox from "../../components/common/InputBox";
import { Input } from "../../components/common/Input/style";
import { PasswordWrapper, Dot } from "./style";
import { CardInputWrapper } from "../../pages/CardAddPage/style";

function CardPasswordInput({
  password,
  handlePassword,
  secondPasswordInputRef,
}) {
  return (
    <CardInputWrapper>
      <label>카드 비밀번호</label>
      <PasswordWrapper>
        <InputBox size="12">
          <Input
            type="password"
            value={password.firstPassword}
            onChange={(e) => handlePassword("firstPassword", e)}
          />
        </InputBox>
        <InputBox size="12">
          <Input
            type="password"
            ref={secondPasswordInputRef}
            value={password.secondPassword}
            onChange={(e) => handlePassword("secondPassword", e)}
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
  handleDueDate: PropTypes.func,
  secondPasswordInputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  handlePassword: PropTypes.func,
};

export default CardPasswordInput;
