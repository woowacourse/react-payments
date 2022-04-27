import { useState } from "react";

const useUserName = () => {
  const [userName, setUserName] = useState("");

  const onChangeUserName = (e) => {
    if (e.target.value.length > 30) {
      return;
    }
    setUserName(e.target.value);
  };

  return [userName, onChangeUserName];
};

export default useUserName;
