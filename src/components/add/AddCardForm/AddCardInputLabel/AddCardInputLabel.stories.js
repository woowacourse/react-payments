import AddCardInputContainer from '.';
import { GRAY } from '../../../../constants/palette';
import Container from '../../../shared/Container';
import Input from '../../../shared/Input';

export default {
  component: AddCardInputContainer,
  title: 'AddCard/AddCardInputContainer',
};

const Template = args => (
  <AddCardInputContainer {...args}>
    <Container backgroundColor={GRAY}>
      <Input width="100%" />
    </Container>
  </AddCardInputContainer>
);

export const Default = Template.bind({});

Default.args = {
  label: '카드번호',
};
