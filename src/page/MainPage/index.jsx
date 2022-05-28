import { Link } from 'react-router-dom';
import useCardContext from 'hooks/useCardContext';

import { ReactComponent as CardAddIcon } from 'assets/card_add_icon.svg';
import CardPreview from 'components/CardPreview';

import styles from './index.module.css';
import { ROUTE } from 'constants';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MainPage = () => {
  const { state } = useCardContext();

  return (
    <div className={cx('container')}>
      <div className={cx('card-list')}>
        <>
          {state.cards.map(({ id, theme, company, number, expiryDate, ownerName, alias }) => (
            <div key={id}>
              <CardPreview
                theme={theme}
                company={company}
                number={number}
                expiryDate={expiryDate}
                ownerName={ownerName}
              />
              <p className={cx('alias')}>{alias ?? company}</p>
            </div>
          ))}
        </>
        <Link to={ROUTE.ADD}>
          <CardAddIcon className={cx('add-icon')} />
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
