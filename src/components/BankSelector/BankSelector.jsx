import React from "react";
import { getId } from "../../utils";
import Bank from "../Bank/Bank";

const bankInfos = [
  { backgroundColor: "bg-custom-red", bank: "국민" },
  { backgroundColor: "bg-custom-blue", bank: "삼성" },
  { backgroundColor: "bg-custom-green", bank: "농협" },
  { backgroundColor: "bg-custom-purple", bank: "BC" },
  { backgroundColor: "bg-custom-gradient-mint", bank: "배민" },
  { backgroundColor: "bg-custom-pink", bank: "신한" },
  { backgroundColor: "bg-custom-orange", bank: "제주" },
  { backgroundColor: "bg-custom-yellow", bank: "카카오" },
];

const BankSelector = ({ onClick }) => (
  <div className="flex justify-center items-center rounded-t-md bg-custom-white w-full  h-56 absolute left-0 bottom-0 z-20">
    <div className="flex flex-wrap m-auto gap-y-6">
      {bankInfos.map(bankProps => (
        <Bank key={getId()} {...bankProps} onClick={onClick} />
      ))}
    </div>
  </div>
);

export default BankSelector;
