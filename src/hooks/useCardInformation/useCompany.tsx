import { useState } from "react";
import { CompanyType } from "../../types";

const useCompany = () => {
  const [company, setCompany] = useState<CompanyType>("");

  return { company, setCompany };
};

export default useCompany;
