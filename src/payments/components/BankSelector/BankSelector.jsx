import React from "react";
import { getId } from "../../../@shared/utils";
import Bank from "../Bank/Bank";

const BankSelector = props => {
  const bankInfos = [
    { backgroundColor: "bg-custom-red", name: "국민" },
    { backgroundColor: "bg-custom-blue", name: "삼성" },
    { backgroundColor: "bg-custom-green", name: "농협" },
    { backgroundColor: "bg-custom-purple", name: "BC" },
    { backgroundColor: "bg-custom-gradient-mint", name: "배민" },
    { backgroundColor: "bg-custom-pink", name: "신한" },
    { backgroundColor: "bg-custom-orange", name: "제주" },
    { backgroundColor: "bg-custom-yellow", name: "카카오" },
  ];

  return (
    <div className="flex justify-center items-center rounded-t-md bg-custom-white w-full  h-56 absolute left-0 bottom-0 z-20">
      <div className="flex flex-wrap m-auto gap-y-6">
        {bankInfos.map(bankProps => (
          <Bank key={getId()} {...bankProps} onClick={props.onClick} />
        ))}
      </div>
    </div>
  );
};

export default BankSelector;
