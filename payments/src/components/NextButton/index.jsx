import Button from '../elements/Button';
import './index.scss';

const NextButton = ({ onClick }) => {
  return (
    <div className='next--button' onClick={onClick}>
      <Button>다음</Button>
    </div>
  );
};
export default NextButton;
