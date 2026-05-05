import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState } from "react";
import type { ComponentProps } from "react";
import { fn } from "storybook/test";
import ValidatedInputGroup from "./ValidatedInputGroup";

type ValidatedInputGroupProps = ComponentProps<typeof ValidatedInputGroup>;

const getFrameWidth = (count: number) => {
  if (count === 1) return 96;
  if (count === 2) return 160;
  return 320;
};

const InteractiveValidatedInputGroup = (args: ValidatedInputGroupProps) => {
  const [values, setValues] = useState(args.values);
  const [errorMessage, setErrorMessage] = useState(args.errorMessage);
  const [errorIndex, setErrorIndex] = useState(args.errorIndex);

  useEffect(() => {
    setValues(args.values);
  }, [args.values]);

  useEffect(() => {
    setErrorMessage(args.errorMessage);
  }, [args.errorMessage]);

  useEffect(() => {
    setErrorIndex(args.errorIndex);
  }, [args.errorIndex]);

  return (
    <div style={{ width: getFrameWidth(args.inputOption.count) }}>
      <ValidatedInputGroup
        {...args}
        values={values}
        errorMessage={errorMessage}
        errorIndex={errorIndex}
        onChange={(index, value) => {
          const nextValues = [...values];
          nextValues[index] = value;

          setValues(nextValues);
          setErrorMessage("");
          setErrorIndex(-1);
          args.onChange(index, value);
        }}
        onBlur={(index) => {
          const value = values[index];

          if (value && !/^\d+$/.test(value)) {
            setErrorMessage("숫자만 입력 가능합니다");
            setErrorIndex(index);
          } else {
            setErrorMessage("");
            setErrorIndex(-1);
          }

          args.onBlur(index);
        }}
      />
    </div>
  );
};

const meta = {
  title: "Components/ValidatedInputGroup",
  component: ValidatedInputGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onChange: fn(),
    onBlur: fn(),
    errorMessage: "",
    errorIndex: -1,
    inputOption: {
      count: 4,
      maxLength: 4,
      placeHolder: ["1234", "1234", "1234", "1234"],
    },
    values: ["", "", "", ""],
  },
  render: (args) => <InteractiveValidatedInputGroup {...args} />,
} satisfies Meta<typeof ValidatedInputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardNumberInputs: Story = {};

export const ExpiryDateInputs: Story = {
  args: {
    inputOption: {
      count: 2,
      maxLength: 2,
      placeHolder: ["MM", "YY"],
    },
    values: ["08", "29"],
  },
};

export const CvcInput: Story = {
  args: {
    inputOption: {
      count: 1,
      maxLength: 3,
      placeHolder: ["123"],
    },
    values: [""],
  },
};

export const ErrorState: Story = {
  args: {
    values: ["12ab", "", "", ""],
    errorMessage: "숫자만 입력 가능합니다",
    errorIndex: 0,
  },
};
