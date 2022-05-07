import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  background-color: ${props => props.color};
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  cursor: ${props => (props.canClick ? 'pointer' : 'auto')};
`;

export const CardCompanyName = styled.span`
  font-weight: 500;
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  color: #383838;
`;

export const IC = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  margin-top: ${props => props.marginTop};
  background: #cbba64;
  border-radius: 4px;
`;

export const CardNumberContainer = styled.p`
  display: flex;
  justify-content: center;
  gap: 5px;
  height: 10px;
  margin-top: ${props => props.marginTop};
  font-weight: 700;
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  letter-spacing: 0.1em;
  color: #525252;
`;

export const CardBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
  margin-top: ${props => props.marginTop};
  font-weight: 700;
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  letter-spacing: 0.1em;
  color: #525252;
`;

export const CardOwnerName = styled.span`
  word-break: break-all;
`;

export const sizeTable = {
  medium: {
    cardContainerSize: {
      width: '213px',
      height: '133px',
      padding: '14px 14px 0',
    },
    cardCompanyNameSize: {
      fontSize: '10px',
      lineHeight: '12px',
    },
    ICSize: {
      width: '40px',
      height: '26px',
      marginTop: '16px',
    },
    cardNumberContainerSize: {
      marginTop: '15px',
      fontSize: '12px',
      lineHeight: '13px',
    },
    cardBottomContainerSize: {
      marginTop: '15px',
      fontSize: '10px',
      lineHeight: '12px',
    },
  },
  large: {
    cardContainerSize: {
      width: '293px',
      height: '183px',
      padding: '19px 19px 0',
    },
    cardCompanyNameSize: {
      fontSize: '14px',
      lineHeight: '16px',
    },
    ICSize: {
      width: '55px',
      height: '36px',
      marginTop: '30px',
    },
    cardNumberContainerSize: {
      marginTop: '20px',
      fontSize: '17px',
      lineHeight: '18px',
    },
    cardBottomContainerSize: {
      marginTop: '17px',
      fontSize: '14px',
      lineHeight: '16px',
    },
  },
};
