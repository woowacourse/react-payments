import { createContext } from "react";

import type { FormWrapperValue } from "./types";

const FormWrapperContext = createContext<FormWrapperValue<
  Record<string, unknown>
> | null>(null);

export default FormWrapperContext;
