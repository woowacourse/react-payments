import { CARD_FORM_TYPE } from "../../../../constants/constants";
import Input from "../../../Common/Input/Input";

const PLACEHOLDER = "비밀번호를 입력해 주세요";
const MAX_LENGTHS = 2;

export default function CardPasswordInput() {
  return (
    <Input
      key={CARD_FORM_TYPE.password}
      placeholder={PLACEHOLDER}
      maxLength={MAX_LENGTHS}
      isError={false}
    />
  );
}
