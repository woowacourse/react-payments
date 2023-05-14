import { Meta } from "@storybook/react";
import Input from "../common/Input";
import { ERROR_MESSAGE, REGEX_PATTERN } from "../../constant";
import { Story } from "../../stories/type";

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
} as Meta;

type InputProps = {
  type: string;
  textAlign?: string;
  isNumber: boolean;
  shape?: string;
  maxLength: number;
  required: boolean;
  pattern: string;
  showError?: (event: React.FocusEvent<HTMLInputElement>) => void;
  canvasElement?: HTMLElement;
};

const Template: Story<InputProps> = (args) => {
  const { ...rest } = args;
  return <Input {...rest} />;
};

const showError = ({ target }: React.FocusEvent<HTMLInputElement>) => {
  if (target.validity.patternMismatch) {
    target.setCustomValidity(ERROR_MESSAGE[target.name]);
    target.reportValidity();
  }
  if (target.validity.tooLong) {
    target.setCustomValidity(ERROR_MESSAGE["LONG_INPUT"]);
    target.reportValidity();
  }
};

export const CommonInput = Template.bind({});
CommonInput.args = {
  isNumber: true,
  maxLength: 4,
  type: "text",
  pattern: REGEX_PATTERN["CARD_NUMBER"],
  required: true,
  textAlign: "center",
};

CommonInput.argTypes = {
  type: {
    options: ["text", "number", "password"],
    control: { type: "select" },
    description: "text, number, password 3가지 타입을 지원합니다.",
  },
  textAlign: {
    options: ["undefined", "center"],
    control: { type: "select" },
    description:
      "기본 설정은 왼쪽정렬입니다. center로 설정하면 텍스트를 가운데 정렬합니다.",
  },
  isNumber: {
    options: [true, false],
    control: { type: "select" },
    description: "true인 경우에 숫자만 입력받을 수 있습니다.",
  },
  shape: {
    options: [undefined, "underline"],
    control: { type: "select" },
    description:
      "기본 설정은 box입니다. underline으로 설정하면 밑줄이 생깁니다.",
  },
  maxLength: {
    control: { type: "number" },
    description: "최대 입력 가능한 글자 수를 설정합니다.",
  },
  required: {
    options: [true, false],
    control: { type: "select" },
    description: "true인 경우에 필수 입력 항목입니다.",
  },
  pattern: {
    options: [...Object.keys(REGEX_PATTERN)],
    control: { type: "select" },
    description: "입력 가능한 정규표현식 패턴을 설정합니다.",
  },
  showError: {
    options: [showError],
    control: { type: "function" },
    description: "pattern 통과 여부를 판단해줍니다.",
  },
};
