import { useState, useEffect } from "react";
import { Company } from "../../types/Card";

const useCompany = () => {
  const [company, setCompany] = useState<Company | undefined>();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setErrorMessage(company === undefined ? "카드사를 선택해주세요" : "");
  }, [company]);

  return { company, setCompany, companyErrorMessage: errorMessage };
};

export default useCompany;
