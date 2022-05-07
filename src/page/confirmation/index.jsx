import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import useAlias from 'hooks/useAlias';
import { CardDispatch } from 'App';

import CardPreview from 'components/CardPreview';
import Button from 'components/common/Button';

import styles from 'css/module/ConfirmationPage.module.css';

const ConfirmationPage = () => {
  const { state, dispatch } = useContext(CardDispatch);
  const { id } = useParams();
  const { theme, company, number, expiryDate, ownerName } = state.cards.find(
    (card) => card.id === id,
  );
  const [alias, isFullFilled, handleAlias] = useAlias();

  return (
    <div className={styles.container}>
      <p className={styles.title}>카드등록이 완료되었습니다.</p>
      <CardPreview
        number={number}
        ownerName={ownerName}
        expiryDate={expiryDate}
        company={company}
        handleModal={() => {}}
        theme={theme}
      />
      <input
        className={styles.input}
        value={alias}
        onChange={(e) => handleAlias(e.target.value)}
        placeholder="카드 이름"
        autoFocus
      />
      {isFullFilled && (
        <Link to="/react-payments/" onClick={() => dispatch({ type: 'SET_ALIAS', alias, id })}>
          <Button theme={theme} className="next-button">
            다음
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ConfirmationPage;
