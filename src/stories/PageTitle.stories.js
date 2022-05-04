import React from "react";

import { PageTitle } from "components/common/PageTitle";

export default {
  title: "Example/PageTitle",
  component: PageTitle,
};

const Template = (args) => <PageTitle {...args} />;

export const PageTitleTemplate = Template.bind({});
PageTitleTemplate.args = {
  children: "카드 등록",
};
