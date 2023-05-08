import styled from 'styled-components';

export const PrevIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </Svg>
  );
};

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 28px;
  min-height: 100vh;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-left: 12px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`;

export const ChangeButtonWrapper = styled.div`
  margin-top: 20px;
  opacity: 0.9;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const InputWrapperParent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0 25px 0;
`;
export const CvcWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NextButtonWrapper = styled.div`
  margin-top: 25px;
  align-self: end;
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;
`;
