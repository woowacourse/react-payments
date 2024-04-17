import { Dispatch, SetStateAction } from "react";
import Input from "./Input";

const OWNER_NAME_PLACEHOLDER = "JOHN DOE";

export default function CardOwnerNameInputField({
  ownerName,
  setOwnerName,
}: {
  ownerName: string;
  setOwnerName: Dispatch<SetStateAction<string>>;
}) {
  return (
    <>
      <div>소유자 이름</div>
      <div>
        <Input
          placeholder={OWNER_NAME_PLACEHOLDER}
          maxLength={26} // 비자 21자, 마스터카드 26자!
          style={{ textTransform: "uppercase" }}
        />
      </div>
      <div>에러메세지</div>
    </>
  );
}
