import CardUserNameField from '.';
import useCardState from 'hooks/useCardState';

export default {
  title: 'Component/CardUserNameField',
  component: CardUserNameField,
  parameters: {
    layout: 'centered',
  },
};

const Template = () => {
  const { state, onChangeCardState } = useCardState();
  const { userName } = state;

  return <CardUserNameField userName={userName} onChange={onChangeCardState} />;
};

export const DefaultCardUserNameFiled = Template.bind({});
DefaultCardUserNameFiled.parameters = {
  controls: { hideNoControlsWarning: true },
};
