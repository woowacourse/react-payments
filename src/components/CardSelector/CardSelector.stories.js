import CardSelector from './CardSelector';
import defaultCardURL from '../../assets/pullup.gif';

export default {
  title: 'Payments/CardSelector',
  component: CardSelector,
  argTypes: {},
};

const Template = (args) => <CardSelector {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: '브랜카드',
  logoImageURL: defaultCardURL,
};
