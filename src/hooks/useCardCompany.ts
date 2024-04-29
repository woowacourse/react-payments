import { ChangeEvent, useRef, useState } from "react";

const useCardCompany = () => {
  const [cardCompany, setCardCompany] = useState("");
  const cardCompanyRef = useRef<HTMLSelectElement>(null);

  const changeCardCompany = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setCardCompany(value);
    cardCompanyRef.current?.blur();
  };

  return { cardCompany, cardCompanyRef, changeCardCompany };
};

export default useCardCompany;
