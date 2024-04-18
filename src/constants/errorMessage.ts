export const ERROR_MESSAGE = {
  notANumber: '숫자를 입력해주세요.',
  notInRange: (min: number, max: number) => {
    return `${min} 이상 ${max} 이하로 작성해주세요.`;
  },
  upperCase: '이름은 영대문자로 입력해주세요.',
  inputCount: (count: number) => {
    return `${count}글자를 입력해주세요.`;
  },
};
