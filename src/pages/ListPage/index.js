import { Card, Text, Heading } from '../../components';
import { ROUTE } from '../../constants';
import './style.css';

export const ListPage = (props) => {
  const { setRoute } = props;
  const handleAddButtonClick = () => setRoute(ROUTE.ADD_FORM);

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
