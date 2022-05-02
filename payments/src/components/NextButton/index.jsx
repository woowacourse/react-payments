import Button from '../elements/Button';
import './index.scss';

const validateCardNum = ({ cardNumber }) => {
  if (cardNumber.join('').length !== 16) {
    throw new Error('카드 번호를 16자리 모두 입력해주세요');
  }
};
const validateExpireDate = ({ expiredDate }) => {
  if (expiredDate[0] > 12) {
    throw new Error('월은 12월까지입니다.');
  }
  if (expiredDate.join('').length !== 4) {
    throw new Error('만료일을 정확히 입력해 주세요');
  }
};

const validateSecureCode = ({ secureCode }) => {
  if (secureCode.length < 3) {
    throw new Error('카드 뒷면의 보안코드 3자리를 입력해주세요');
  }
};
const validatePassword = ({ password }) => {
  if (password.join('').length !== 2) {
    throw new Error('비밀번호 앞 두자리를 입력해 주세요');
  }
};

const validateCardName = ({ cardName }) => {
  if (cardName === '') {
    throw new Error('카드 종류를 선택해주세요');
  }
};

const validateArray = [validateCardName, validateCardNum, validateExpireDate, validateSecureCode, validatePassword];

const NextButton = ({ state }) => {
  const { cardNumber, expiredDate, ownerName } = state;

  const submit = () => {
    try {
      validateArray.forEach((validateFunc) => {
        validateFunc(state);
      });
      if (
        window.confirm(`입력하신 카드정보가
      카드번호:${cardNumber.join('-')}
      카드 만료일:${expiredDate.join('/')}
      카드 소유자 이름:${ownerName === '' ? '임꺽정' : ownerName} 이
      맞습니까`)
      ) {
        alert('카드가 등록되었습니다');
      }
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className='next--button'>
      <Button onClick={submit}>다음</Button>
    </div>
  );
};

export default NextButton;
