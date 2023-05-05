import styles from './NotFound.module.css';
import thinkingFace from '../../images/thinking_face.png';
import BackButton from '../../components/common/BackButton/BackButton';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <img className={styles['thinking-face']} src={thinkingFace} alt="페이지를 찾을 수 없습니다" />
      <h2>죄송합니다. 원하시는 페이지를 찾지 못했어요.</h2>
      <p>주소가 올바른지 다시 한 번 확인해 주시겠어요? 아니면, 메인 페이지로 돌아가실 수도 있어요.</p>
      <BackButton href="/">메인 페이지로</BackButton>
    </div>
  );
};

export default NotFound;
