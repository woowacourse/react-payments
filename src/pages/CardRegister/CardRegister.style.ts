import styled from 'styled-components';

export const SubContainer = styled.div`
  width: 100%;
  height: 642px;

  padding: 0 30px 0 31px;
`;

export const CardPreviewWrapper = styled.div`
  width: 100%;
  padding: 77px 0 45px 0px;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;

  gap: 16px;

  max-height: 392px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ErrorWrapper = styled.div`
  height: 14px;
`;

export const ErrorMessage = styled.span`
  color: #ff3d3d;

  font-size: 0.5938rem;
  font-weight: 400;
  line-height: 0.875rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 52px;

  border-radius: 0px 0px 4px 4px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 100%;

  color: #f3f3f3;
  font-weight: 700;
  font-size: 1rem;

  background-color: #333333;
`;
