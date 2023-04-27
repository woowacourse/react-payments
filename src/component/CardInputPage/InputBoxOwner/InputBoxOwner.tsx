import { useState, ChangeEvent } from "react";
import Input from "../../common/Input";

import styles from "./inputBoxOwner.module.css";
import CONSTANT from "../../../Constant";

interface Props {
  setPreviewDataHandler?: () => void;
}

export default function InputBoxOwner(props: Props) {
  const { setPreviewDataHandler } = props;

  const [nameLength, setNameLength] = useState(0);

  const whiteSpaceParser = (value: string) => (
    value.split(/\s{2,}/).filter((spelling) => spelling !== "").join(" ")
  );

  const lengthParser = (value: string) => value.slice(0, CONSTANT.OWNER_NAME_MAX_LENGTH);

  const nameLengthHandler = (value: string) => {
    setNameLength(value.length);
  };
  
  return (
    <div className={styles.inputBox}>
      <p>카드 소유자 이름(선택)</p>
      <p>{nameLength}/{CONSTANT.OWNER_NAME_MAX_LENGTH}</p>
      <Input
        name="card-owner"
        className={styles.input}
        type="text"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        inputMode="text"
        parsers={[whiteSpaceParser, lengthParser]}
        valueChangeSubscribers={[nameLengthHandler]}
      ></Input>
      <p>TBD</p>
    </div>
  );
}
