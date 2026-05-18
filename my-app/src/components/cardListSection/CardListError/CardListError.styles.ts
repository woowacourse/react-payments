import styled from '@emotion/styled';

export const CardListPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 28px;
  gap: 24px;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #353C49;
`;

export const ErrorContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 12px;
`;

export const ErrorIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 156px;

  img {
    width: 64px;
    height: 64px;
  }
`;

export const ErrorTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #353C49;
`;

export const ErrorSubTitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #8C8C8C;
`;

export const RetryButton = styled.button`
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 5px;
  background-color: #333333;
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;
