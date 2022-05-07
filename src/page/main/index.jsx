import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CardDispatch } from 'App';
import { ReactComponent as CardAddIcon } from 'assets/card_add_icon.svg';
import CardPreview from 'components/CardPreview';

import styles from 'css/module/MainPage.module.css';

const MainPage = () => {
  const { state } = useContext(CardDispatch);

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
                handleModal={() => {}}
              />
              <p className={styles.alias}>{alias ?? company}</p>
            </div>
          ))}
        </>
        <Link to="/react-payments/add">
          <CardAddIcon className={styles.AddIcon} />
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
