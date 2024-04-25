import styled from 'styled-components';
import SubmitPageLayout from '../components/layout/SubmitPageLayout';
import cardAdded from '../assets/cardAdded.png';
import Title from '../components/common/Title';
import { useLocation, useNavigate } from 'react-router-dom';
import CardConfirmButton from '../components/CardConfirmButton';
import { URL } from '../constants/card-app';

const CardSubmitPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { startNumber, cardCompany } = location.state;

  const content = `${startNumber}로 시작하는
  ${cardCompany}가 등록되었어요.`;

  const handleConfirmButtonClick = () => {
    navigate(URL.defaultPage, {
      replace: true,
    });
  };

  return (
    <SubmitPageLayout>
      <SubmitContainer>
        <CardAddedImage src={cardAdded} />

        <TextField>
          <Title content={content} fontSize={'25px'} fontWeight={'700'} lineHeight={'36px'} />
        </TextField>
        <CardConfirmButton onClick={handleConfirmButtonClick} />
      </SubmitContainer>
    </SubmitPageLayout>
  );
};

const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

const TextField = styled.div`
  width: 338px;
  height: 100px;

  text-align: center;
`;

const CardAddedImage = styled.img`
  width: 76px;
  height: 76px;

  margin-bottom: 25px;
`;

export default CardSubmitPage;
