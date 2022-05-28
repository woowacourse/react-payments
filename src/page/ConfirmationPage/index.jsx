import { useParams, useNavigate } from 'react-router-dom';
import useAlias from 'hooks/useAlias';
import useCardContext from 'hooks/useCardContext';

import { CardPreview, Button } from 'components';

import styles from './index.module.css';
import validate from './validator';
import { ACTION } from 'actions/card';
import { ROUTE } from 'constants';
import { INPUT_MAX_LENGTH } from 'constants';
import classNames from 'classnames/bind';
import axios from 'axios';

const cx = classNames.bind(styles);

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useCardContext();
  const { id } = useParams();
  const { theme, company, number, expiryDate, ownerName } = state.cards.find(
    (card) => card.id === id,
  );
  const [alias, isFullFilled, handleAlias] = useAlias();

  const confirmCard = () => {
    try {
      validate(state.cards, alias);

      patchCard();
      dispatch({ type: ACTION.SET_ALIAS, alias, id });
      navigate(ROUTE.MAIN);
    } catch (error) {
      alert(error.message);
    }
  };

  const patchCard = async () => {
    await axios.patch(`/cards/${id}`, {
      alias: alias,
    });
  };

  return (
    <div className={cx('container')}>
      <p className={cx('title')}>카드등록이 완료되었습니다.</p>
      <CardPreview
        number={number}
        ownerName={ownerName}
        expiryDate={expiryDate}
        company={company}
        theme={theme}
      />
      <input
        className={cx('input')}
        value={alias}
        onChange={(e) => handleAlias(e.target.value)}
        placeholder="카드 이름"
        maxLength={INPUT_MAX_LENGTH.ALIAS}
        autoFocus
      />
      {isFullFilled && (
        <Button theme={theme} className="next-button" handleClick={confirmCard}>
          다음
        </Button>
      )}
    </div>
  );
};

export default ConfirmationPage;
