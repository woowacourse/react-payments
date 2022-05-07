import { useNavigate } from 'react-router-dom';

function CardNameInputForm({ children }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate('/react-payments');
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}

export default CardNameInputForm;
