import React from "react";
import Field from "@/components/layout/Field/Field";
import Select from "@/components/common/Select/Select";

const CardCompany = () => {
  return (
    <Field
      title="카드사를 선택해 주세요"
      description="현재 국내 카드사만 가능합니다."
      labelText=""
      errorMessage=""
    >
      <Select
        options={[
          "BC카드",
          "신한카드",
          "카카오뱅크",
          "현대카드",
          "우리카드",
          "롯데카드",
          "하나카드",
          "국민카드",
        ]}
      />
    </Field>
  );
};

export default CardCompany;
