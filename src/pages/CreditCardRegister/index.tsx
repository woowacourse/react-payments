import CreditCard from 'components/CreditCard';
import Input from 'components/Input';
import { useNavigate } from 'react-router-dom';

function CreditCardRegister() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div>--</div>
        <div>카드 추가</div>
      </div>
      <div>
        <CreditCard
          fullFilled
          creditCard={{
            number: '1234123412341234',
            expiry: '03/45',
            owner: 'NOAH',
          }}
        />
      </div>
      <form>
        <div>
          <Input type="string" value="1111-" width="100%" textAlign="center" onChange={() => { }} />
        </div>
        <div>
          <Input type="string" value="MM/YY" width="40%" textAlign="center" onChange={() => { }} />
        </div>
        <div>
          <Input type="string" value="NAME" width="100%" textAlign="start" onChange={() => { }} />
        </div>
        <div>
          <Input type="string" value="***" width="48px" textAlign="center" onChange={() => { }} />
        </div>
        <div>
          <Input type="string" value="" width="24px" textAlign="center" onChange={() => { }} />
          <Input type="string" value="" width="24px" textAlign="center" onChange={() => { }} />
          <Input type="string" value="*" width="24px" textAlign="center" onChange={() => { }} />
          <Input type="string" value="*" width="24px" textAlign="center" onChange={() => { }} />
        </div>
      </form>
      <div>
        <button type="button" onClick={() => navigate('/')}>확인</button>
      </div>
    </div>
  );
}
export default CreditCardRegister;
