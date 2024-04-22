import styled from 'styled-components';
import STYLE from '../../constants/style';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  width: 246px;
  height: 154px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${STYLE.COLOR.black50};
  box-shadow: rgba(0, 0, 0, 0.35) 8px 12px 16px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardNumbers = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardNumber = styled.p`
  font-family: ${STYLE.FONT_FAMILY_INTER};
  font-size: ${STYLE.FONT_SIZE.middle};
  font-weight: ${STYLE.BOLD.label};
  line-height: 15px;
  text-align: left;
  color: ${STYLE.COLOR.white};
  width: 34px;
`;

export const CardNameAndExpiration = styled.div`
  display: flex;
  justify-content: space-between;
  height: 36px;
`;

export const CardNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const NameLabel = styled.p`
  font-family: ${STYLE.FONT_FAMILY_INTER};
  font-size: ${STYLE.FONT_SIZE.small};
  font-weight: ${STYLE.BOLD.label};
  line-height: 15px;
  text-align: left;
  color: ${STYLE.COLOR.white};
`;

export const Name = styled.p`
  max-width: 156px;
  font-family: ${STYLE.FONT_FAMILY_INTER};
  font-size: ${STYLE.FONT_SIZE.label};
  font-weight: ${STYLE.BOLD.label};
  line-height: 15px;
  text-align: left;
  color: white;
  text-transform: uppercase;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CardExpirationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ExpirationLabel = styled.p`
  font-family: ${STYLE.FONT_FAMILY_INTER};
  font-size: ${STYLE.FONT_SIZE.small};
  font-weight: ${STYLE.BOLD.label};
  line-height: 15px;
  text-align: right;
  color: ${STYLE.COLOR.white};
`;

export const Expiration = styled.p`
  font-family: ${STYLE.FONT_FAMILY_INTER};
  font-size: ${STYLE.FONT_SIZE.label};
  font-weight: ${STYLE.BOLD.label};
  line-height: 15px;
  text-align: right;
  color: ${STYLE.COLOR.white};
`;

export const Image = styled.img`
  width: 36px;
  height: 28px;
`;
