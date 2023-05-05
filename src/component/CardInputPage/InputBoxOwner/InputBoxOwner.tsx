import { PropsWithChildren, useState } from "react";
import Input from "../../common/Input";
import { useCreditCardContext } from "../../../context/CreditCardContext";
import styles from "./inputBoxOwner.module.css";
import CONSTANT from "../../../Constant";

export default function InputBoxOwner(props: PropsWithChildren) {
  const { setCardInfo } = useCreditCardContext();

  const [nameLength, setNameLength] = useState(0);

  const whiteSpaceParser = (value: string) => (
    value.split(/\s{2,}/).filter((spelling) => spelling !== "").join(" ")
  );

  const lengthParser = (value: string) => value.slice(0, CONSTANT.OWNER_NAME_MAX_LENGTH);

  const nameLengthHandler = (value: string) => {
    setNameLength(value.length);
  };

  const nameChangeHandler = (value: string) => setCardInfo({ name: value });
  
  return (
    <div className={styles.inputBox}>
      <p>카드 소유자 이름(선택)</p>
      <p>{nameLength}/{CONSTANT.OWNER_NAME_MAX_LENGTH}</p>
      <Input
        data-testid="card-owner"
        className={styles.input}
        type="text"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        inputMode="text"
        parsers={[whiteSpaceParser, lengthParser]}
        valueChangeSubscribers={[nameLengthHandler, nameChangeHandler]}
      ></Input>
      <p>TBD</p>
    </div>
  );
}
