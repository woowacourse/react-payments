import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import { UserListContext } from '../../context/userListContext';
import './index.scss';
/*
const testList = [
  {
    cardNumber: ['1111', '1111', '1111', '1111'],
    expiredDate: ['12', '25'],
    ownerName: 'kang',
    secureCode: '123',
    password: ['1', '2'],
    cardName: '신한',
    color: '#6de38c',
  },
  {
    cardNumber: ['2222', '2222', '2222', '2222'],
    expiredDate: ['12', '25'],
    ownerName: 'ho',
    secureCode: '123',
    password: ['1', '2'],
    cardName: '국민',
    color: '#a3f1ff',
  },
];
*/
const CardList = () => {
  const { userList } = useContext(UserListContext);

  return (
    <div>
      <p className='card-list__header'>보유카드</p>
      <div className='card-list'>
        {userList.map((userInfo, index) => (
          <div className='card' key={index}>
            <Card className='card' state={userInfo}></Card>
          </div>
        ))}

        <Link to='/cardAdd' style={{ textDecoration: 'none' }}>
          <div className='card-add__button'>+</div>
        </Link>
      </div>
    </div>
  );
};

export default CardList;
