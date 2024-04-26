import type { Meta, StoryObj } from "@storybook/react";
import ExpirationPeriodField, {
  ExpirationPeriodInputType,
} from "./ExpirationPeriodField";
import { validateIsValidLength, validateMonth } from "@/utils/validation";
import useInputs from "@/hooks/useInputs";
import { VALID_LENGTH } from "@/constants/condition";

const meta = {
  title: "CardRegisterForm/ExpirationPeriodField",
  component: ExpirationPeriodField,
} satisfies Meta<typeof ExpirationPeriodField>;

export default meta;

const ExpirationPeriodFieldWithHook = () => {
  const expirationPeriodState = useInputs<ExpirationPeriodInputType>({
    initialValue: { expirationMonth: "", expirationYear: "" },
    validates: [
      (value: string) =>
        validateIsValidLength(value, VALID_LENGTH.EXPIRATION_PERIOD),
      (value: string, name: string) =>
        name === "expirationMonth" ? validateMonth(Number(value)) : null,
    ],
  });

  return (
    <ExpirationPeriodField expirationPeriodState={expirationPeriodState} />
  );
};

type Story = StoryObj<typeof ExpirationPeriodField>;

export const Default: Story = {
  render: () => <ExpirationPeriodFieldWithHook />,
};
