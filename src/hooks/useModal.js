import { useCallback, useState } from 'react';

import Modal from 'components/@common/Modal';

import { MODAL_STATE } from 'constants';

function useModal() {
  const [modalState, setVisible] = useState(MODAL_STATE.HIDDEN);

  const handleVisible = () => setVisible(MODAL_STATE.VISIBLE);
  const handleDisappear = () => setVisible(MODAL_STATE.DISAPPEAR);
  const handleHidden = () => setVisible(MODAL_STATE.HIDDEN);

  // 부모 컴포넌트에서 렌더링이 실행 될 때마다 모달 오픈 애니메이션이 계속 발동 됨 => useCallback으로 감싸니 해결
  // 추정 원인 : 버그 수정 전에는 기존 앨리먼트 비교 없이, 계속해서 모달이 새롭게 그려지고 있었는 것으로 추정.
  // 기존에는 커스텀훅에서 객체를 매번 새롭게 생성해서 반환했으니, 메모리 주소가 계속 바뀌어서...? 리액트가 변경되었다고 감지?
  // 나중에 더 찾아보기
  const ModalContainer = useCallback(
    ({ children }) =>
      modalState !== MODAL_STATE.HIDDEN && (
        <Modal state={modalState} onClickDimmer={handleDisappear} onHiddenEnd={handleHidden}>
          {children}
        </Modal>
      ),
    [modalState],
  );

  return {
    Modal: ModalContainer,
    handleModalOpen: handleVisible,
    handleModalClose: handleDisappear,
  };
}

export default useModal;
