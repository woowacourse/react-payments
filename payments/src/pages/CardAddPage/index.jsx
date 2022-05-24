import { useState } from "react";
import CardAdd from "../../components/organisms/CardAdd";
import SetNickname from "../../components/organisms/NicknameInputContainer";

const CardAddPage = () => {
  const [isDoneCardInfo, setDoneCardInfo] = useState(false);

  return (
    <>
      {isDoneCardInfo ? (
        <SetNickname setDone={setDoneCardInfo} />
      ) : (
        <CardAdd setDone={setDoneCardInfo} />
      )}
    </>
  );
};

export default CardAddPage;
