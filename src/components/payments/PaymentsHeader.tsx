import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { PAGE_PATH, PATH_TITLE } from '../../constants';

type Pathname = keyof typeof PATH_TITLE;

const isValidPath = (path: string): path is Pathname => {
  return Object.keys(PATH_TITLE).includes(path);
};

const PaymentsHeader = () => {
  const { pathname } = useLocation();

  if (!isValidPath(pathname)) throw new Error('존재하지 않는 path입니다.');

  const pageTitle = PATH_TITLE[pathname];

  return (
    <StyledHeader pageTitle={pageTitle}>
      <StyledLeftArrowButton to={PAGE_PATH.HOME} title={pageTitle} />
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

const StyledHeader = styled.header<{ pageTitle: string }>`
  display: ${(props) => (props.pageTitle === '' ? 'none' : 'flex')};
  height: 70px;
  align-items: center;
  position: sticky;
  top: 0px;
  background-color: #fff;
  z-index: 999;
  margin-bottom: 10px;
`;

const StyledHeaderTitle = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #383838;
`;

export default PaymentsHeader;
