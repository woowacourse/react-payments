import { useNavigate } from 'react-router-dom';
import styles from './errorPage.module.css';
import Spacer from '../../components/common/Spacer/index';
import { CardChip } from '../../assets/svg';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <span role="alert" className="text-title">
        오류가 발생했습니다.
      </span>
      <Spacer height={20} />
      <div className={styles.emptyCard}>
        <Spacer height={35} />
        <CardChip />
        <span className={styles.mark}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M6.72 5.66l11.62 11.62A8.25 8.25 0 006.72 5.66zm10.56 12.68L5.66 6.72a8.25 8.25 0 0011.62 11.62zM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      <Spacer height={40} />
      <button className={styles.button} onClick={() => navigate('/')}>
        <span className="text-subtitle">메인 페이지로 돌아가기</span>
      </button>
    </div>
  );
};
export default ErrorPage;
