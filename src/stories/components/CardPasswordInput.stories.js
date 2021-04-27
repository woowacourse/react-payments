import CardPasswordInput from '../../components/cardCreation/cardPasswordInput/CardPasswordInput';
import { FIRST, SECOND } from '../../constants/inputName';

export default {
  title: 'Components/CardPasswordInput',
  component: CardPasswordInput,
};

const Template = args => <CardPasswordInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  setCardPassword: () => {},
  setValidCardPassword: () => {},
  isValidCardPassword: true,
  cardPassword: { [FIRST]: '1', [SECOND]: '1' },
};
