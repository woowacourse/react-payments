import PropTypes from "prop-types";
import InputBox from "../../components/common/InputBox";
import { Input } from "../../components/common/Input/style";
import Button from "../common/Button";
import { CVCWrapper } from "./style";
import { CardInputWrapper } from "../../pages/CardAddPage/style";
import { ReactComponent as QuestionImage } from "../../assets/question.svg";

function CardCVCInput({ cvc, handleChangeCvc }) {
  return (
    <CardInputWrapper>
      <label>보안 코드(CVC/CVV)</label>
      <CVCWrapper>
        <InputBox size="30">
          <Input type="password" value={cvc} onChange={handleChangeCvc} />
        </InputBox>
        <Button>
          <QuestionImage />
        </Button>
      </CVCWrapper>
    </CardInputWrapper>
  );
}

CardCVCInput.propTypes = {
  cvc: PropTypes.string,
  handleChangeCvc: PropTypes.func,
};

export default CardCVCInput;
