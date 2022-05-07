import PropTypes from "prop-types";
import InputBox from "components/InputBox";
import { Input } from "components/Input/style";
import Button from "components/Button";
import { ReactComponent as QuestionImage } from "assets/question.svg";
import { CardInputWrapper } from "pages/style";
import { CVCWrapper, QuestionWrapper, ToolTipWrapper } from "./style";

function CardCVCInput({ cvc, handleChangeCvc }) {
  return (
    <CardInputWrapper>
      <label>보안 코드(CVC/CVV)</label>
      <CVCWrapper>
        <InputBox size="30">
          <Input
            type="password"
            value={cvc}
            onChange={handleChangeCvc}
            data-testid="secure-code"
          />
        </InputBox>
        <QuestionWrapper>
          <Button>
            <QuestionImage />
          </Button>
        </QuestionWrapper>
        <ToolTipWrapper>카드 뒷면의 3자리 보안코드</ToolTipWrapper>
      </CVCWrapper>
    </CardInputWrapper>
  );
}

CardCVCInput.propTypes = {
  cvc: PropTypes.string,
  handleChangeCvc: PropTypes.func,
};

export default CardCVCInput;
