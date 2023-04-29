import BottomSheet from '../../../components/BottomSheet';
import CardSelectButton from './CardSelectButton';
import './CardNameBottomSheet.css';

const CardNameBottomSheet = ({ isOpen, onToggleOpen, setCardType: setCardCompany }: any) => {
  return (
    <BottomSheet isOpen={isOpen} onToggleOpen={onToggleOpen}>
      <div className="card-name-select">
        <CardSelectButton
          cardName="BC카드"
          onClick={() => {
            onToggleOpen(!isOpen);
            setCardCompany('BC카드');
          }}
        />
        <CardSelectButton
          cardName="신한카드"
          onClick={() => {
            onToggleOpen(!isOpen);
            setCardCompany('신한카드');
          }}
        />
        <CardSelectButton
          cardName="카카오뱅크"
          onClick={() => {
            onToggleOpen(!isOpen);
            setCardCompany('카카오뱅크');
          }}
        />
        <CardSelectButton
          cardName="현대카드"
          onClick={() => {
            onToggleOpen(!isOpen);
            setCardCompany('현대카드');
          }}
        />
        <CardSelectButton
          cardName="우리카드"
          onClick={() => {
            onToggleOpen(!isOpen);
            setCardCompany('우리카드');
          }}
        />
        <CardSelectButton
          cardName="롯데카드"
          onClick={() => {
            onToggleOpen(!isOpen);
            setCardCompany('롯데카드');
          }}
        />
        <CardSelectButton
          cardName="하나카드"
          onClick={() => {
            onToggleOpen(!isOpen);
            setCardCompany('하나카드');
          }}
        />
        <CardSelectButton
          cardName="국민카드"
          onClick={() => {
            onToggleOpen(!isOpen);
            setCardCompany('국민카드');
          }}
        />
      </div>
    </BottomSheet>
  );
};

export default CardNameBottomSheet;
