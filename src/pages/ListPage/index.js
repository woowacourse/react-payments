import { useHistory } from 'react-router-dom';
import { Card, Text, Heading } from '../../components';
import { ROUTE } from '../../constants';
import './style.css';

export const ListPage = () => {
  const history = useHistory();
  const handleAddButtonClick = () => history.push(ROUTE.ADD);

  return (
    <div className="ListPage">
      <Heading>보유카드</Heading>
      <button className="ListPage__AddButton" onClick={handleAddButtonClick}>
        <Card>
          <Text className="ListPage__AddSign">+</Text>
        </Card>
      </button>
    </div>
  );
};
