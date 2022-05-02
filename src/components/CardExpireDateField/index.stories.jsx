import CardExpireDateField from '.';
import useCardState from 'hooks/useCardState';

export default {
  title: 'Component/CardExpireDateField',
  component: CardExpireDateField,
  parameters: {
    layout: 'centered',
  },
};

const Template = () => {
  const { state, onChangeTextField } = useCardState();
  const { expireMonth, expireYear } = state;
  return (
    <CardExpireDateField
      onChange={onChangeTextField}
      expireMonth={expireMonth}
      expireYear={expireYear}
    />
  );
};

export const DefaultCardExpireDateField = Template.bind({});
DefaultCardExpireDateField.parameters = {
  controls: { hideNoControlsWarning: true },
};
