import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface SubmitButtonProps {
  cardNumber: number | null;
  cardBrand: string | undefined;
}

const Button = styled.button`
  width: 100%;
  height: 52px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubmitButton = ({ cardNumber, cardBrand }: SubmitButtonProps) => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate('/confirm', { state: { cardNumber, cardBrand } })}
    >
      확인
    </Button>
  );
};
