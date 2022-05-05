import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div``;

export const InputBasic = styled.input`
  background-color: #ecebf1;
  border-radius: 0.25rem;
  border-color: #9ca3af;
  padding-left: 5px;
  height: 45px;
  width: ${({ width }) => width || '100%'};
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border: none;
  font-weight: 600;
  color: ${({ color }) => color};

  &::placeholder {
    color: ${({ color }) => lighten(0.2, color)};
  }
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  color: #d3d3d3;
  width: ${({ width }) => width || '100%'};
  background-color: #ecebf1;
  border-radius: 0.25rem;
  justify-content: ${({ isSpaceBetween }) => (isSpaceBetween ? 'space-between' : 'unset')};
`;

export const InputTitle = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.085em;
  margin-bottom: ${({ marginBottom }) => marginBottom || '4px'}
  color: #525252;
`;

export const SmallCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  width: 208px;
  height: 130px;
  padding: 10px;
  font-size: 30px;
  color: #fff;
  margin-bottom: 16px;

  background: ${({ color }) => color};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  user-select: none;
`;

export const CardTop = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const CardMiddle = styled(CardTop)`
  margin-left: 30px;
`;

export const CardBottom = styled(CardTop)`
  flex-direction: column;
`;

export const CardText = styled.span`
  margin: 0 10px;
  font-size: 14px;
  line-height: 16px;
  vertical-align: middle;
  font-weight: 400;
  display: inline-block;
`;

export const SmallCardChip = styled.div`
  width: 40px;
  height: 26px;
  left: 95px;
  top: 122px;

  background: #cbba64;
  border-radius: 4px;
`;

export const CardBottomNumber = styled.div``;

export const CardBottomInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CardTextEllipsis = styled(CardText)`
  text-align: left;
  width: 220px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const CardNumber = styled(CardText)`
  width: 30px;
`;

export const CardCompanyStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
  height: 105px;
  cursor: pointer;
`;

export const CardCompanyName = styled.p`
  margin: 10px 0;
  color: ${({ selected }) => (selected ? '#000000' : '#5e5e5e')};
  font-size: 12px;
  letter-spacing: -0.085rem;
`;

export const Hyphen = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 47px;
  color: ${({ color }) => color || '#737373'};
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const NameLength = styled.p`
  margin: 0;
  letter-spacing: -0.05em;
  font-size: 12px;
  color: ${({ isLengthValidated }) => (isLengthValidated ? '#E24141' : '#525252')};
`;

export const InputBasicLeft = styled(InputBasic)`
  text-align: left;
  padding-left: 30px;
`;

export const ExtendedInputBox = styled(InputBox)`
  width: 220px;
  justify-content: space-between;
`;

export const Circle = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 100%;
  background-color: ${({ color }) => color};
`;

export const Dimmer = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background: rgba(0, 0, 0, 0.5);
`;

export const ErrorMessageParagraph = styled.p`
  height: 18px;
  margin: 4px 0;
  text-align: left;
  font-size: 14px;
  color: #e24141;
`;

export const NextButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

export const NextButton = styled.button`
  cursor: pointer;
  color: #fff;
  background-color: ${({ color }) => color};
  border: 0;
  font-weight: 700;
  font-size: 14px;
  border-radius: 8px;
  width: 100%;
  height: 35px;
  &:disabled {
    color: #fff;
    cursor: default;
    background-color: #e5e5e5;
  }
`;

export const PageTitleBox = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const PageTitle = styled.span`
  margin-left: 17px;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.085em;
`;

export const TipButton = styled.div`
  width: 27px;
  height: 27px;
  margin-left: 15px;
  background: #ffffff;
  border: 1px solid #bababa;
  border-radius: 100%;
  box-sizing: border-box;
  text-align: center;
  line-height: 27px;
  color: #969696;
  font-size: 20px;
  cursor: pointer;
`;

export const ToastModal = styled.div`
  position: fixed;
  left: 0;
  bottom: ${({ show }) => (show ? 0 : -100)}%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 220px;
  padding: 34px 0;
  border-radius: 5px 5px 0 0;
  background: #fff;
  z-index: 10;
  transition: bottom 0.4s linear;
`;

export const PasswordBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43px;
  height: 45px;
`;
