import CardNumberField from '.';
import useCardState from 'hooks/useCardState';

export default {
  title: 'Component/CardNumberField',
  component: CardNumberField,
  parameters: {
    layout: 'centered',
  },
};

const Template = () => {
  const { state, onChangeTextField } = useCardState();
  const { cardNumber } = state;

  return <CardNumberField cardNumber={cardNumber} onChange={onChangeTextField} />;
};

export const DefaultCardNumberField = Template.bind({});
DefaultCardNumberField.parameters = {
  controls: { hideNoControlsWarning: true },
};
