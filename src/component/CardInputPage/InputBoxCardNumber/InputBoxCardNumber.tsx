import { ChangeEvent, useState } from "react";
import CardNumber from "./CardNumber";

interface Props {
  //   setCardNumber?: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function InputBoxCardNumber() {
  const [error, setError] = useState(false);

  return (
    <div>
      <p>카드번호</p>
      <CardNumber />
      <p>에러메세지</p>
    </div>
  );
}
