import { Link } from 'react-router-dom';
import useCardContext from 'hooks/useCardContext';

import { ReactComponent as CardAddIcon } from 'assets/card_add_icon.svg';
import CardPreview from 'components/CardPreview';

import styles from 'css/module/MainPage.module.css';
import { ROUTE } from 'constants';

const MainPage = () => {
  const { state } = useCardContext();

  return (
    <div className={styles.container}>
      <div className={styles.cardList}>
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
              <p className={styles.alias}>{alias ?? company}</p>
            </div>
          ))}
        </>
        <Link to={ROUTE.ADD}>
          <CardAddIcon className={styles.AddIcon} />
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
