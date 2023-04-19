import CreditCard from 'components/CreditCard';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div>보유카드</div>
      <div>
        <CreditCard
          fullFilled
          creditCard={{
            number: '1234123412341234',
            expiry: '03/45',
            owner: 'NOAH',
          }}
        />
        <CreditCard
          fullFilled
          creditCard={{
            number: '1234123412341234',
            expiry: '03/45',
            owner: 'NOAH',
          }}
        />
        <CreditCard
          fullFilled
          creditCard={{
            number: '1234123412341234',
            expiry: '03/45',
            owner: 'NOAH',
          }}
        />
      </div>

      <div>
        <div>새로운 카드를 등록해주세요.</div>
        <div>
          <button type="button" onClick={() => navigate('/register')}>+</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
