import LinkButton from "component/common/LinkButton/LinkButton.component";
import PageTitle from "component/common/PageTitle/PageTitle.component";
import Header from "component/common/Header/Header.component";
import { Meta, Story } from "@storybook/react";
import React from "react";

export default {
  title: "Common/Header",
  component: Header,
} as Meta;

export const CardAddHeader: Story<{ children: React.ReactNode }> = (args) => (
  <Header {...args}>
    <LinkButton>{"<"}</LinkButton>
    <PageTitle type="header">카드 추가</PageTitle>
  </Header>
);

CardAddHeader.args = {};
