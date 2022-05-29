import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from 'components/button/Button';
import DeleteButtonContainer from 'containers/button/DeleteButtonContainer';
import EditButtonContainer from 'containers/button/EditButtonContainer';
import AddCardContainer from 'containers/card/AddCardContainer';
import NextButtonContainer from 'containers/button/NextButtonContainer';
import BackButtonContainer from 'containers/button/BackButtonContainer';
import ConfirmButtonContainer from 'containers/button/ConfirmButtonContainer';
import TypeButton from 'components/button/TypeButton';
import { cardTypes } from '../constants';

export default {
  title: 'Component/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const EditButton: ComponentStory<typeof EditButtonContainer> = (args) => (
  <EditButtonContainer {...args} />
);
const DeleteButton: ComponentStory<typeof DeleteButtonContainer> = (args) => (
  <DeleteButtonContainer {...args} />
);
const AddButton: ComponentStory<typeof AddCardContainer> = () => <AddCardContainer />;
const NextButton: ComponentStory<typeof NextButtonContainer> = () => <NextButtonContainer />;
const BackButton: ComponentStory<typeof BackButtonContainer> = () => <BackButtonContainer />;
const ComfirmButton: ComponentStory<typeof ConfirmButtonContainer> = () => (
  <ConfirmButtonContainer />
);
const RedTypeTemplate: ComponentStory<typeof TypeButton> = (args) => <TypeButton {...args} />;
const YellowTypeTemplate: ComponentStory<typeof TypeButton> = (args) => <TypeButton {...args} />;
const OrangeTypeTemplate: ComponentStory<typeof TypeButton> = (args) => <TypeButton {...args} />;
const GreenTypeTemplate: ComponentStory<typeof TypeButton> = (args) => <TypeButton {...args} />;
const BlueTypeTemplate: ComponentStory<typeof TypeButton> = (args) => <TypeButton {...args} />;
const PurpleTypeTemplate: ComponentStory<typeof TypeButton> = (args) => <TypeButton {...args} />;

export const Edit = EditButton.bind({});
Edit.args = {
  id: '',
};

export const Delete = DeleteButton.bind({});
Edit.args = {
  id: '',
};

export const Next = NextButton.bind({});

export const Add = AddButton.bind({});

export const Back = BackButton.bind({});

export const Comfirm = ComfirmButton.bind({});

export const RedType = RedTypeTemplate.bind({});
RedType.args = {
  typeButtonClick: () => {},
  cardInfo: cardTypes[0],
};

export const YellowType = YellowTypeTemplate.bind({});
YellowType.args = {
  typeButtonClick: () => {},
  cardInfo: cardTypes[1],
};

export const OrangeType = OrangeTypeTemplate.bind({});
OrangeType.args = {
  typeButtonClick: () => {},
  cardInfo: cardTypes[2],
};

export const GreenType = GreenTypeTemplate.bind({});
GreenType.args = {
  typeButtonClick: () => {},
  cardInfo: cardTypes[3],
};

export const BlueType = BlueTypeTemplate.bind({});
BlueType.args = {
  typeButtonClick: () => {},
  cardInfo: cardTypes[4],
};

export const PurpleType = PurpleTypeTemplate.bind({});
PurpleType.args = {
  typeButtonClick: () => {},
  cardInfo: cardTypes[5],
};
