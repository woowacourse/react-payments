import styled from '@emotion/styled';
import { Button } from '../components/common/Styled';
import { useNavigate } from 'react-router-dom';
import { useBrandContext } from '../contexts/BrandContext';
import { useNumbersContext } from '../contexts/NumbersContext';
import { useExpiryDateContext } from '../contexts/ExpiryDateContext';
import { useCvcContext } from '../contexts/CvcContext';
import { usePasswordContext } from '../contexts/PasswordContext';

const CompletePage = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const brand = params.get('brand') || '';
  const number = params.get('number') || '';
  const { resetBrand } = useBrandContext();
  const { resetNumbers } = useNumbersContext();
  const { resetExpiryDate } = useExpiryDateContext();
  const { resetCvc } = useCvcContext();
  const { resetPassword } = usePasswordContext();

  const onClick = () => {
    resetBrand();
    resetNumbers();
    resetExpiryDate();
    resetCvc();
    resetPassword();
    navigate('/');
  };

  return (
    <Center>
      <img src="./images/completeIcon.svg" alt="Complete" />
      <Notice>
        {number}로 시작하는
        <br />
        {brand}카드가 등록되었어요.
      </Notice>
      <ConfirmButton onClick={onClick} type="button">
        확인
      </ConfirmButton>
    </Center>
  );
};

export default CompletePage;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 25px;
  padding: 0 28px;
`;

const Notice = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.notice};
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
`;

const ConfirmButton = styled(Button)`
  border-radius: 5px;
  height: 44px;
`;
