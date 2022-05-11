import React from "react";

import { Modal } from "components/common/Modal";
import { CardSelectModal } from "components/cardRegister/CardSelectModal";
import { CVCHelperModal } from "components/cardRegister/CVCHelperModal";
import { ErrorModal } from "components/common";
import { errorState, ErrorContext } from "contexts";
import { CARD_TYPES } from "constants/constants";

export default {
  title: "Example/Modal",
  component: Modal,
  decorators: [
    (Story) => {
      return (
        <ErrorContext.Provider value={errorState}>
          <Story />
        </ErrorContext.Provider>
      );
    },
  ],
};

const Template = (args) => <Modal {...args} />;

export const EmptyModalTemplate = Template.bind({});
EmptyModalTemplate.args = {
  children: <></>,
  visible: true,
};

export const CardSelectModalTemplate = Template.bind({});
CardSelectModalTemplate.args = {
  children: <CardSelectModal cardTypes={CARD_TYPES} />,
  visible: true,
};

export const CVCHelperModalTemplate = Template.bind({});
CVCHelperModalTemplate.args = {
  children: <CVCHelperModal />,
  visible: true,
};

export const ErrorModalTemplate = Template.bind({});
ErrorModalTemplate.args = {
  children: <ErrorModal />,
  visible: true,
};
