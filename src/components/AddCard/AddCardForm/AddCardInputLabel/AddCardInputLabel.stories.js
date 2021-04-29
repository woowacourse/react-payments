import AddCardInputContainer from '.';
import PALETTE from '../../../../constants/palette';
import Container from '../../../common/Container';
import Input from '../../../common/Input';

export default {
  component: AddCardInputContainer,
  title: 'AddCard/AddCardInputContainer',
};

const Template = args => (
  <AddCardInputContainer {...args}>
    <Container backgroundColor={PALETTE.GRAY_1}>
      <Input width="100%" />
    </Container>
  </AddCardInputContainer>
);

export const Default = Template.bind({});

Default.args = {
  label: '카드번호',
};
