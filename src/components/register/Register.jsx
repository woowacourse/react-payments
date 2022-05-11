import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardsContext } from 'context/CardsProvider';
import Card from 'components/card/Card';

function Register() {
  const { cards, setCards } = useContext(CardsContext);
  const navigate = useNavigate();
  const categoryInput = useRef();

  const handleRegisterCard = () => {
    setCards((prevCards) =>
      prevCards.map((card, index) => {
        if (index === prevCards.length - 1) {
          return { ...card, category: categoryInput.current.value };
        }
        return card;
      })
    );
    navigate('/react-payments');
  };

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <Card card={cards[cards.length - 1]} />
      <div className="input-container flex-center w-100">
        <input
          className="input-underline w-75"
          ref={categoryInput}
          type="text"
          placeholder="카드의 별칭을 입력해주세요."
        />
      </div>
      <div className="button-box mt-50">
        <span className="button-text" onClick={handleRegisterCard}>
          확인
        </span>
      </div>
    </div>
  );
}

export default Register;
