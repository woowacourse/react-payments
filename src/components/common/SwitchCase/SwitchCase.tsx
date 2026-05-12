interface CaseBy<T> {
  case: T;
  component: React.ReactNode;
}

interface SwitchCaseProps<T> {
  value: T;
  caseBy: CaseBy<T>[];
  defaultCase?: React.ReactNode;
}

const SwitchCase = <T,>({ value, caseBy, defaultCase }: SwitchCaseProps<T>) => {
  const caseComponent = caseBy.find(
    ({ case: caseValue }) => caseValue === value,
  )?.component;

  return <div>{caseComponent || defaultCase || null}</div>;
};

export default SwitchCase;
