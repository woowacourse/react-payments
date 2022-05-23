import PageTitle from "component/common/PageTitle/PageTitle.component";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Common/PageTitle",
  component: PageTitle,
} as Meta;

export const CardAddPageTitle: Story<{ styleType?: string }> = (args) => (
  <PageTitle {...args}>카드 추가</PageTitle>
);
CardAddPageTitle.args = {
  styleType: "header",
};

export const CardRegisterConfirmTitle: Story<{ styleType?: string }> = (
  args
) => <PageTitle {...args}>카드 등록이 완료되었습니다.</PageTitle>;
CardRegisterConfirmTitle.args = {};
