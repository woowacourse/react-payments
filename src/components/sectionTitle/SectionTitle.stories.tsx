import { Meta, StoryObj } from "@storybook/react";
import SectionTitle from "./SectionTitle";

const meta = {
    title: "SectionTitle",
    component: SectionTitle,
  } satisfies Meta<typeof SectionTitle>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;
  
  export const Default: Story = {
    args: {
        title :'타이틀입니다.',
        subTitle : '서브타이틀입니다'
    }
  };

