import { Meta, StoryObj } from '@storybook/react';
import { useModalContext, ModalPortal, ModalContextProvider } from 'react-modal-patrick';
import Button from '../components/common/Button';

const meta: Meta<typeof ModalPortal> = {
  title: 'Modal',
  component: ModalPortal,
  decorators: [
    Story => (
      <ModalContextProvider>
        <Story />
      </ModalContextProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ModalPortal>;

export const Modal: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isModalOpen, openModal, closeModal } = useModalContext();

    return (
      <>
        <Button text="모달 열기" onClick={openModal} />
        {isModalOpen && (
          <ModalPortal closeModalHandler={closeModal}>
            <p>
              안녕하세요. 저는 patrick입니다. 이번에 제가 만든 모달을 npm에 처음으로 배포해봤습니다. 주소는
              https://www.npmjs.com/package/modal-patrick?activeTab=readme입니다. 패키지 이름은 modal-patrick입니다.
              기분이 너무 좋습니다. 신납니다. 행복합니다. 앞으로 Npm에 배포를 많이 해보고 싶습니다. 하루하루 새로운 것을
              알아가는게 쉽진 않지만 생산적인 하루를 살아가는 느낌입니다. 코딩 열심히 하겠습니다. 짱짱. 화이팅.
            </p>
          </ModalPortal>
        )}
      </>
    );
  },
};
