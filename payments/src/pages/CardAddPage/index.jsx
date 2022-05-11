import { useState } from "react";
import CardAdd from "../../components/organisms/CardAdd";
import SetNickname from "../../components/organisms/SetNickname";

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
