import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const title = {
  '/': '보유카드',
  '/addCard': '카드 추가',
  '/addCardPage': '',
};

type Pathname = '/' | '/addCard' | '/addCardPage';

const PaymentsHeader = () => {
  const { pathname } = useLocation();
  const pageTitle = title[pathname as Pathname];

  return (
    <StyledHeader>
      <StyledLeftArrowButton to="/" title={pageTitle} />
      <StyledHeaderTitle>{pageTitle}</StyledHeaderTitle>
    </StyledHeader>
  );
};

const StyledLeftArrowButton = styled(Link)`
  display: ${(props) => (props.title === '카드 추가' ? 'block' : 'none')};

  position: relative;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  margin-right: 8px;

  &::after {
    content: ' ';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0%;
    left: 54%;
    border-right: 1.5px solid #525252;
    border-bottom: 1.5px solid #525252;
    transform: translate(-50%, -50%) rotate(135deg);
  }
`;

const StyledHeader = styled.header`
  display: flex;
  height: 70px;
  align-items: center;
  padding: 22px;
`;

const StyledHeaderTitle = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #383838;
`;

export default PaymentsHeader;
