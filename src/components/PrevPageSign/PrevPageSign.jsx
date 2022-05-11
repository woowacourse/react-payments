import { useNavigate } from 'react-router-dom';

function PrevPageSign() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/react-payments');
  };

  return <div className="prev-page-sign" onClick={handleClick} />;
}

export default PrevPageSign;
