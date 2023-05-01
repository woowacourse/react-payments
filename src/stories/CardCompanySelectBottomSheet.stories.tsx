import type { Meta, StoryObj } from '@storybook/react';

import CardCompanySelectBottomSheet from '../components/CardCompanySelectBottomSheet';
import {
  ModalProvider,
  useModalContext,
} from '../components/common/Modal/ModalContext';

const meta: Meta<typeof CardCompanySelectBottomSheet> = {
  title: 'components/CardCompanySelectBottomSheet',
  component: CardCompanySelectBottomSheet,
  decorators: [(Story) => <ModalProvider>{<Story />}</ModalProvider>],
};

export default meta;
type Story = StoryObj<typeof CardCompanySelectBottomSheet>;

const Template: Story = {
  render: () => {
    const { openModal } = useModalContext();

    return (
      <>
        <button
          style={{
            width: '200px',
            height: '64px',
            backgroundColor: '#333',
            color: '#fff',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={openModal}
        >
          카드사 선택 창 열기
        </button>
        <CardCompanySelectBottomSheet />
      </>
    );
  },
};

export const Default: Story = {
  ...Template,
};
