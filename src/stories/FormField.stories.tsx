import type { Meta, StoryObj } from "@storybook/react";
import FormField from "../Components/FormField";

const meta = {
  title: "Components/FormField",
  component: FormField,
  argTypes: {
    formFieldInfo: { control: "object", description: "FormFieldInfo 객체" },
    formErrors: { control: "object", description: "FormError 객체" },
  },
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "신용 카드 UI 기본값",
  args: {
    formFieldInfo: {
      key: "cardNumbers",
      title: "결제할 카드 번호를 입력해 주세요",
      label: "카드 번호",
      inputInfoList: [
        {
          name: "first",
          placeholder: "1234",
          maxLength: 4,
          onInputChange: () => {},
        },
      ],
    },
    formErrors: {
      cardNumbers: {
        errorMessage: "에러",
        isError: true,
      },
      cardValidityPeriod: {
        errorMessage: "",
        isError: false,
      },
      ownerName: {
        errorMessage: "에러",
        isError: true,
      },
    },
  },
};

export const SmallInputForm: Story = {
  name: "preset이 small인 경우",
  args: {
    formFieldInfo: {
      key: "cardNumbers",
      title: "결제할 카드 번호를 입력해 주세요",
      description: "본인 명의의 카드만 결제 가능합니다.",
      label: "카드 번호",
      sizePreset: "small",
      inputInfoList: [
        {
          name: "1",
          placeholder: "1234",
          maxLength: 4,
          onInputChange: () => {},
        },
        {
          name: "2",
          placeholder: "1234",
          maxLength: 4,
          onInputChange: () => {},
        },
        {
          name: "3",
          placeholder: "1234",
          maxLength: 4,
          onInputChange: () => {},
        },
        {
          name: "4",
          placeholder: "1234",
          maxLength: 4,
          onInputChange: () => {},
        },
      ],
    },
    formErrors: {
      cardNumbers: {
        errorMessage: "",
        isError: false,
      },
      cardValidityPeriod: {
        errorMessage: "",
        isError: false,
      },
      ownerName: {
        errorMessage: "에러",
        isError: true,
      },
    },
  },
};

export const MediumInputForm: Story = {
  name: "preset이 medium인 경우",
  args: {
    formFieldInfo: {
      key: "cardValidityPeriod",
      title: "카드 유효기간을 입력해 주세요",
      description: "월/년도(MM/YY)를 순서대로 입력해 주세요.",
      label: "유효기간",
      sizePreset: "medium",
      inputInfoList: [
        {
          name: "1",
          placeholder: "MM",
          maxLength: 2,
          onInputChange: () => {},
        },
        {
          name: "2",
          placeholder: "YY",
          maxLength: 2,
          onInputChange: () => {},
        },
      ],
    },
    formErrors: {
      cardNumbers: {
        errorMessage: "",
        isError: false,
      },
      cardValidityPeriod: {
        errorMessage: "",
        isError: false,
      },
      ownerName: {
        errorMessage: "에러",
        isError: true,
      },
    },
  },
};

export const LargeInputForm: Story = {
  name: "preset이 large인 경우",
  args: {
    formFieldInfo: {
      key: "ownerName",
      title: "카드 소유자 이름을 입력해 주세요",
      label: "소유자 이름",
      sizePreset: "large",
      inputInfoList: [
        {
          name: "name",
          placeholder: "LURGI PARK",
          maxLength: 20,
          onInputChange: () => {},
        },
      ],
    },
    formErrors: {
      cardNumbers: {
        errorMessage: "",
        isError: false,
      },
      cardValidityPeriod: {
        errorMessage: "",
        isError: false,
      },
      ownerName: {
        errorMessage: "에러",
        isError: true,
      },
    },
  },
};
