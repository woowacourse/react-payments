const isValidMonth = (month: string) => {
  // ^0[1-9] : 0으로 시작하고 뒤에 1~9가 오거나 (01~09)
  // | : 또는
  // ^1[0-2] : 1로 시작하고 뒤에 0~2가 오는 경우 (10~12)
  const regex = /^(0[1-9]|1[0-2])$/;
  return regex.test(month);
};

const isNumericString = (str: string) => {
  const regex = /^\d+$/;
  return regex.test(str);
};

const isRequired = (value: string) => {
  if (value.length) return true;
  return false;
};

interface Rule {
  type: string;
  message: string;
  validator?: (value: string) => boolean;
}

const checkVadlidate = (value: string, rules: Rule[]) => {
  const unValidCondition = rules.find((rule) => {
    switch (rule.type) {
      case 'required':
        return !isRequired(value);
      case 'numbericString':
        return !isNumericString(value);
      case 'custom':
        return !rule.validator?.(value);
      default:
        return true;
    }
  });
  if (unValidCondition) return false;
  return true;
};

const validationMonth = [
  { type: 'required', message: '필수값입니다' },
  { type: 'length', message: '2자입력을 해야합니다', length: 2 },
  { type: 'numbericString', message: '숫자를 입력해야합니다' },
  { type: 'custom', message: '월를 입력해야합니다', validator: isValidMonth },
];

const isMonthValid = checkVadlidate('02', validationMonth);
console.log('isMonthValid', isMonthValid);
