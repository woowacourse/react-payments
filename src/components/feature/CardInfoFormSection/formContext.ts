import { createFormContext } from "@hooks/useFormWrapper";

import type { CardInfoFormState } from "./formState";

export const { FormWrapper, useFormValue } =
  createFormContext<CardInfoFormState>();
