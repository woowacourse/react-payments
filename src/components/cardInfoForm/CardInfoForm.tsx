import styled from '@emotion/styled';

import Button from '../common/Button/Button';

interface CardInfoFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  canSubmit: boolean;
  children: React.ReactNode;
}

function CardInfoForm(props: CardInfoFormProps) {
  const { canSubmit, children } = props;

  return (
    <CardForm>
      {children}
      {canSubmit && (
        <CardFormButtonWrapper>
          <Button customStyle={cardFormButtonStyle} text="확인" />
        </CardFormButtonWrapper>
      )}
    </CardForm>
  );
}

export default CardInfoForm;

const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 38px;
  margin-top: 45px;
`;

const CardFormButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const cardFormButtonStyle = {
  width: '376px',
  height: '50px',
  backgroundColor: '#000000',
  color: '#ffffff',
  border: 'none',
  transition: 'background-color 0.3s ease-in-out',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: '#697a9080',
  },
};
