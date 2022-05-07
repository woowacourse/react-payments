import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CardDispatch } from 'App';
import { ReactComponent as CardAddIcon } from 'assets/card_add_icon.svg';
import CardPreview from 'components/CardPreview';

const MainPage = () => {
  const { state } = useContext(CardDispatch);

  return (
    <div className="main-container">
      <div className="card-list">
        <div className="card-items">
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
              <p className="alias">{alias ?? company}</p>
            </div>
          ))}
        </div>
        <Link to="/react-payments/add">
          <CardAddIcon className="card-add-icon" />
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
