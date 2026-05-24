import { createFormContext } from "@hooks/common/useFormWrapper";

import type { CardInfoFormState } from "./formState";

export const { withFormWrapper, useFormValue } =
  createFormContext<CardInfoFormState>();
