import type { Meta, StoryObj } from '@storybook/react-vite';
import CardFormSection from '../components/AddCardForm/CardFormSection';
import Input from '../components/Common/Input';

const meta = {
  title: 'CardForm/CardFormSection',
  component: CardFormSection,
  tags: ['autodocs'],
  args: { children: null as any },
} satisfies Meta<typeof CardFormSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <CardFormSection>
      <CardFormSection.Title>결제할 카드 번호를 입력해 주세요</CardFormSection.Title>
      <CardFormSection.Description>본인 명의의 카드만 결제 가능합니다.</CardFormSection.Description>
      <Input placeholder="1234" />
    </CardFormSection>
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <CardFormSection>
      <CardFormSection.Title>카드사를 선택해 주세요</CardFormSection.Title>
      <Input placeholder="선택" />
    </CardFormSection>
  ),
};

export const Hidden: Story = {
  render: () => (
    <CardFormSection isVisible={false}>
      <CardFormSection.Title>숨겨진 섹션</CardFormSection.Title>
      <Input placeholder="표시되지 않습니다" />
    </CardFormSection>
  ),
};
