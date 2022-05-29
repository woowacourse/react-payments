import ModalButton from "component/common/ModalButton/ModalButton.component";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Common/ModalButton",
  component: ModalButton,
} as Meta;

export const EditModalButton: Story<{ styleType?: "edit" | "delete" }> = (
  args
) => <ModalButton {...args}>수정하기</ModalButton>;
EditModalButton.args = {
  styleType: "edit",
};

export const DeleteModalButton: Story<{ styleType?: "edit" | "delete" }> = (
  args
) => <ModalButton {...args}>삭제하기</ModalButton>;
DeleteModalButton.args = {
  styleType: "delete",
};
