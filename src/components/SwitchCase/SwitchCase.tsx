import { ReactElement } from "react";

type ObjectKey = string | number | symbol;

interface SwitchCaseProps<T extends ObjectKey> {
  value: T;
  caseBy: Record<T, () => ReactElement>;
  defaultComponent?: () => ReactElement;
}

function SwitchCase<T extends ObjectKey>({
  value,
  caseBy,
  defaultComponent,
}: SwitchCaseProps<T>) {
  return (caseBy[value] ?? defaultComponent)();
}

export default SwitchCase;
