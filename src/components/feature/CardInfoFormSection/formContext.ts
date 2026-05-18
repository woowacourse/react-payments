import { createFormContext } from "@hooks/useFormWrapper";

import type { CardInfoFormState } from "./formState";

export const { withFormWrapper, useFormValue } =
  createFormContext<CardInfoFormState>();
