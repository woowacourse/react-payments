import CardPasswordField from '.';
import useCardState from 'hooks/useCardState';

export default {
  title: 'Component/CardPasswordField',
  component: CardPasswordField,
  parameters: {
    layout: 'centered',
  },
};

const Template = () => {
  const { state, onChangeCardState } = useCardState();
  const { cardPassword } = state;

  return <CardPasswordField cardPassword={cardPassword} onChange={onChangeCardState} />;
};

export const DefaultCardPasswordField = Template.bind({});
DefaultCardPasswordField.parameters = {
  controls: { hideNoControlsWarning: true },
};
