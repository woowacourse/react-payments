import { useState } from "react";
import { CompanyType } from "../../types";
import { UseHookReturn } from "../../types/CardInformationType";

const useCompany = (): UseHookReturn<"company"> => {
  const [company, setCompany] = useState<CompanyType>("");

  const isComplete = company !== "";

  return { state: company, setState: setCompany, isComplete };
};

export default useCompany;
