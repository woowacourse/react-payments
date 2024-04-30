import styled from 'styled-components';

export interface IExpiryDateProps {
  expiryDate: { month: string; year: string };
}

const DATE_SEPARATOR = '/';

const ExpiryDate = ({ expiryDate: { month, year } }: IExpiryDateProps) => {
  return (
    <S.ExpiryDateContainer>
      <div>{month}</div>
      <div>{(month || year) && DATE_SEPARATOR}</div>
      <div>{year}</div>
    </S.ExpiryDateContainer>
  );
};

const S = {
  ExpiryDateContainer: styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    height: 20px;
  `,
};

export default ExpiryDate;
