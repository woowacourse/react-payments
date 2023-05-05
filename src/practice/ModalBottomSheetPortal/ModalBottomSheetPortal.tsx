import ReactDOM from 'react-dom';
import ModalBottomSheet from '../../components/common/ModalBottomSheet/ModalBottomSheet';

/**
 * 실습용 컴포넌트입니다. 실제 프로젝트에서 랜더링 되지는 않아요!
 * 물론, 에러를 콘솔로 던지는 것도 사용자가 아닌, 개발자에게 알리기 위한 의도입니다!
 */
const ModalBottomSheetPortal = () => {
  const body = document.querySelector('body');

  if (!body) {
    throw Error('포탈 모달을 랜더링하는 데 실패했습니다.');
  }

  return ReactDOM.createPortal(<ModalBottomSheet />, body);
};

export default ModalBottomSheetPortal;
