import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, CreditCardPreview, Text, TrashCanIcon, Heading } from '../../components';
import { getFormattedCardInfo } from '../../cardInfoFormatter';
import { CardListContext } from '../../contexts';
import { ROUTE } from '../../constants';
import './style.css';

export const ListPage = () => {
  const { cardList, deleteCard } = useContext(CardListContext);
  const history = useHistory();
  const handleAddButtonClick = () => history.push(ROUTE.ADD);

  return (
    <div className="ListPage">
      <Heading className="ListPage__Heading">보유카드</Heading>
      <ul className="List">
        {cardList?.map((cardInfo) => {
          const { company, nickname, id } = cardInfo;
          const { formattedNumber, formattedExpirationDate, formattedOwnerName } = getFormattedCardInfo({ cardInfo });
          return (
            <li key={id} className="ListItem__Card">
              <CreditCardPreview
                companyColor={company.color}
                companyName={company.name}
                cardNumber={formattedNumber}
                ownerName={formattedOwnerName}
                expirationDate={formattedExpirationDate}
              />
              <span className="ListItem__Card__Nickname">{nickname}</span>
              <Button className="ListItem__Card__DeleteButton">
                <TrashCanIcon width="1.1rem" color="#888" onClick={() => deleteCard(id)} />
              </Button>
            </li>
          );
        })}
        <li className="ListItem__Add">
          <Button className="ListItem__Add__Button" onClick={handleAddButtonClick}>
            <Card>
              <Text className="ListItem__Add__Sign">+</Text>
            </Card>
          </Button>
        </li>
      </ul>
    </div>
  );
};
