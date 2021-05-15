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
      <Heading>보유카드</Heading>
      <ul className="ListPage__UnorderedList">
        {cardList.map((cardInfo, index) => {
          const { company, nickname } = cardInfo;
          const { formattedNumber, formattedExpirationDate, formattedOwnerName } = getFormattedCardInfo({ cardInfo });
          return (
            <li key={index}>
              <CreditCardPreview
                className="ListPage__UnorderedList__CreditCardPreview"
                companyColor={company.color}
                companyName={company.name}
                cardNumber={formattedNumber}
                ownerName={formattedOwnerName}
                expirationDate={formattedExpirationDate}
              />
              <span className="ListPage__UnorderedList__Nickname">{nickname}</span>
            </li>
          );
        })}
      </ul>
      <button className="ListPage__AddButton" onClick={handleAddButtonClick}>
        <Card>
          <Text className="ListPage__AddButton__AddSign">+</Text>
        </Card>
      </button>
    </div>
  );
};
