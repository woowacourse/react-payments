import { useState } from "react";
import { CompanyType } from "../../types";

const useCompany = () => {
  const [company, setCompany] = useState<CompanyType>("");

  const isCompanyComplete = company !== "";

  return { company, setCompany, isCompanyComplete };
};

export default useCompany;
