import type { ChangeEvent } from "react";

interface CardCompanyProps {
  value: string;
  onChange: (value: string) => void;
}

export function CardCompany(props: CardCompanyProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    props.onChange(event.target.value);
  };

  return (
    <select onChange={handleChange} value={props.value}>
      <option value="" disabled hidden>
        카드사를 선택해주세요
      </option>
      <option value="BC카드">BC카드</option>
      <option value="신한카드">신한카드</option>
      <option value="카카오뱅크">카카오뱅크</option>
      <option value="현대카드">현대카드</option>
      <option value="우리카드">우리카드</option>
      <option value="롯데카드">롯데카드</option>
      <option value="하나카드">하나카드</option>
      <option value="국민카드">국민카드</option>
    </select>
  );
}
