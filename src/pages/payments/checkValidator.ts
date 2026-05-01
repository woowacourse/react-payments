interface Rule {
  type: string;
  message: string;
  validator?: (value: string) => boolean;
}

interface CheckValidatorRule {
  type: string;
  validator: (value: unknown) => boolean;
}

class CheckValidator {
  rules: {
    [ruleType: string]: CheckValidatorRule;
  } = {
    required: {
      type: 'requried',
      validator: (value: unknown) => {
        return !!value;
      },
    },
    isNumericString: {
      type: 'isNumericString',
      validator: (value: unknown) => {
        const regex = /^\d+$/;
        return regex.test(value);
      },
    },
  };
  addRule(rule: CheckValidatorRule) {
    this.rules[rule.type] = rule;
  }
  checkVadlidates(value: unknown, rules: Rule[]) {
    const unValidCondition = rules.find((rule: Rule) => {
      const currentRule = this.rules[rule.type];

      const isValid = currentRule.validator(value);
      return isValid;
    });

    if (unValidCondition) return false;
  }
}

const checkVadlidator = new CheckValidator();

const isValidMonth = (month: unknown) => {
  // ^0[1-9] : 0으로 시작하고 뒤에 1~9가 오거나 (01~09)
  // | : 또는
  // ^1[0-2] : 1로 시작하고 뒤에 0~2가 오는 경우 (10~12)
  const regex = /^(0[1-9]|1[0-2])$/;
  return regex.test(month);
};

checkVadlidator.addRule({
  type: 'isValidMonth',
  validator: isValidMonth,
});
