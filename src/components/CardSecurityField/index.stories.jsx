import CardSecurityField from '.';
import useCardState from 'hooks/useCardState';

export default {
  title: 'Component/CardSecurityField',
  component: CardSecurityField,
  parameters: {
    layout: 'centered',
  },
};

const Template = () => {
  const { state, onChangeTextField } = useCardState();
  const { securityCode } = state;

  return <CardSecurityField securityCode={securityCode} onChange={onChangeTextField} />;
};

export const DefaultCardSecurityField = Template.bind({});
DefaultCardSecurityField.parameters = {
  controls: { hideNoControlsWarning: true },
};
