import styled from "@emotion/styled";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 45px 30px 20px 30px;
  gap: 8px;
`;

export const Field = styled.section`
  display: flex;
  flex-direction: column;
`;

export const InfoInput = styled.input`
  flex: 1;
  min-width: 0;
  height: 32px;
  border: 1px solid rgba(172, 172, 172, 1);
  border-radius: 6px;
  padding: 4px;
`;

export const ErrorMessage = styled.p`
  padding: 0;
  margin: 8px 0;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: rgba(255, 61, 61, 1);
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  line-height: 100%;
  color: rgba(0, 0, 0, 1);
`;

export const Description = styled.p`
  font-size: 9.5px;
  font-weight: 400;
  line-height: 100%;
  color: rgba(139, 149, 161, 1);
  margin: 4px 0 0 0;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  color: rgba(10, 13, 19, 1);
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 100%;
`;
