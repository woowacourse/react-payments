import React, { useContext } from "react";
import { HiOutlinePlus } from "react-icons/hi";

import { SetPathContext } from "components/context/PathProvider";

import { CardBox } from "./style";

function AddCardItem() {
  const setPath = useContext(SetPathContext);

  const handleClick = () => {
    setPath("add-card");
  };

  return (
    <CardBox onClick={handleClick}>
      <HiOutlinePlus size={30} />
    </CardBox>
  );
}

export default AddCardItem;
