import { Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { messageStyle } from "pages/LoadingPage";
import LoaderComponent from "components/Loader";
import { CardLoader } from "components/svg";

const meta = {
  component: LoaderComponent,
  title: "Components/Loader",
  tags: ["autodocs"],

  args: {
    children: <CardLoader />,
    message: "카드를 등록중입니다.",
    messageStyle: messageStyle,
  },

  argTypes: {
    children: {
      options: {
        "Card Loader": <CardLoader />,
      },
      control: {
        type: "radio",
      },
      description: "Loader(animation)를 변경할 수 있습니다.",
    },

    message: {
      description: "Loader 아래 메시지를 변경할 수 있습니다.",
    },

    messageStyle: {
      options: {
        "Card Loader Style": messageStyle,
      },
      control: {
        type: "radio",
      },
      description: "메시지 스타일을 변경할 수 있습니다.",
    },
  },
} satisfies Meta<typeof LoaderComponent>;

export default meta;

export const Loader = (args: any) => {
  return (
    <BrowserRouter>
      <div id="root">
        <div>
          <LoaderComponent {...args} />
        </div>
      </div>
    </BrowserRouter>
  );
};
