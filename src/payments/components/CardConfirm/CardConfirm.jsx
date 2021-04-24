import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";

const CardConfirm = props => (
  <section className="relative w-full h-160 flex flex-col">
    <div>
      <div className="w-full h-full flex flex-col items-center">
        <h1 className="text-2xl mb-24">카드등록이 완료되었습니다.</h1>
        <Card isRegistered={true} scale="scale-150" {...props} />
        <input className=" text-custom-darkgray text-center font-normal text-lg border-b-2 border-custom-gray-250 focus:outline-none mt-16" />
      </div>
    </div>
    <div className="absolute bottom-0 left-0 flex justify-end items-center w-full h-10">
      <Button name="확인" />
    </div>
  </section>
);

export default CardConfirm;
