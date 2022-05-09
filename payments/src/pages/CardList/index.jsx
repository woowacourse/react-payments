import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import { UserListContext } from '../../context/userListContext';
import { UserContext } from '../../context/userContext';
import './index.scss';
import { initState } from '../../const';
import CardAddButton from '../../components/CardAddButton';

const CardList = () => {
  const { userList } = useContext(UserListContext);
  const { updateInputStates } = useContext(UserContext);

  const onclick = () => {
    updateInputStates(initState);
  };

  return (
    <div>
      <p className='card-list__header'>보유카드</p>
      <div className='card-list'>
        {userList.map((user, index) => (
          <div className='card' key={index}>
            <Card className='card' state={user.userInfo}></Card>
            <p className='user-nickname__tag'>{user.nickName}</p>
          </div>
        ))}
        <Link to='/cardAdd' style={{ textDecoration: 'none' }} onClick={onclick}>
          <CardAddButton></CardAddButton>
        </Link>
      </div>
    </div>
  );
};

export default CardList;
