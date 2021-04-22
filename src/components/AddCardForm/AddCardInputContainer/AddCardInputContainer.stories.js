import AddCardInputContainer from '.';
import { GRAY } from '../../../constants/palette';
import Container from '../../common/Container';
import Input from '../../common/Input';

export default {
  component: AddCardInputContainer,
  title: 'Form/AddCardInputContainer',
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
