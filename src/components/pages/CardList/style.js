import styled from 'styled-components/macro';
import PALETTE from '../../../styles/palette';

const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
`;

const Spinner = styled.img`
  display: ${({ isShowing }) => (isShowing ? 'block' : 'none')};
  width: 40px;
  position: fixed;
  top: 50%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;

  &: not(: last-child) {
    margin-bottom: 26px;
  }
`;

const SettingButton = styled.img`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 14px;
  cursor: pointer;

  &: hover {
    transform: scale(1.2);
  }
  transition: transform 0.2s;
`;

const CardAlias = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: ${PALETTE.BOLD_BLACK}
  height: 26px;
`;

const CardAddButton = styled.button`
  display: ${({ isShowing }) => (isShowing ? 'block' : 'none')};
  position: relative;
  width: 208px;
  height: 130px;
  background-color: ${PALETTE.ADD_CARD_GRAY};
  border-color: transparent;
  border-radius: 5px;
  font-size: 30px;
  cursor: pointer;
  color: ${PALETTE.BOLD_BLACK};
`;

export { Root, Spinner, CardWrapper, SettingButton, CardAlias, CardAddButton };
