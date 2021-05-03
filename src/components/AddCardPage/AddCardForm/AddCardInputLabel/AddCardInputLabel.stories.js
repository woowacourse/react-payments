import AddCardInputContainer from '.';
import PALETTE from '../../../../constants/palette';
import Container from '../../../shared/Container';
import Input from '../../../shared/Input';

export default {
  component: AddCardInputContainer,
  title: 'AddCardPage/AddCardInputContainer',
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
