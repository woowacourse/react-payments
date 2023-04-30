import styled from "styled-components";

export const Page = styled.div`
  position: relative;
  box-sizing: border-box;
  min-height: 100vh;
  padding: 20px 28px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #383838;
  margin-left: 12px;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const InputWrapperParent = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
export const CvcWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const CvcButtonWrapper = styled.div`
  position: relative;
  margin-left: 11px;
`;
export const DownRightButtonWrapper = styled.div`
  position: absolute;
  right: 25px;
  bottom: 25px;
`;

