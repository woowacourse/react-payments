import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CreditCardPreview, Text, Heading } from '../../components';
import { getFormattedCardInfo } from '../../cardInfoFormatter';
import { CardListContext } from '../../contexts';
import { ROUTE } from '../../constants';
import './style.css';

export const ListPage = () => {
  const { cardList } = useContext(CardListContext);
  const history = useHistory();
  const handleAddButtonClick = () => history.push(ROUTE.ADD);

  return (
    <div className="ListPage">
      <Heading className="ListPage__Heading">보유카드</Heading>
      <ul className="List">
        {cardList.map((cardInfo, index) => {
          const { company, nickname } = cardInfo;
          const { formattedNumber, formattedExpirationDate, formattedOwnerName } = getFormattedCardInfo({ cardInfo });
          return (
            <li key={index} className="ListItem__Card">
              <CreditCardPreview
                companyColor={company.color}
                companyName={company.name}
                cardNumber={formattedNumber}
                ownerName={formattedOwnerName}
                expirationDate={formattedExpirationDate}
              />
              <span className="ListItem__Card__Nickname">{nickname}</span>
            </li>
          );
        })}
        <li className="ListItem__Add">
          <button className="ListItem__Add__Button" onClick={handleAddButtonClick}>
            <Card>
              <Text className="ListItem__Add__Sign">+</Text>
            </Card>
          </button>
        </li>
      </ul>
    </div>
  );
};
