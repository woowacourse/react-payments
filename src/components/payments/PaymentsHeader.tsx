import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { PAGE_PATH, PATH_TITLE } from '../../constants';
import backButton from '../../assets/back-button.svg';

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
      <StyledLeftArrowButton to={PAGE_PATH.HOME} title={pageTitle}>
        <img src={backButton} alt="뒤로가기" />
      </StyledLeftArrowButton>
      <StyledHeaderTitle>{pageTitle}</StyledHeaderTitle>
    </StyledHeader>
  );
};

const StyledLeftArrowButton = styled(Link)`
  display: ${(props) => (props.title === '카드 추가' ? 'flex' : 'none')};
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 8px;
`;

const StyledHeader = styled.header<{ pageTitle: string }>`
  display: ${(props) => (props.pageTitle === '' ? 'none' : 'flex')};
  align-items: center;
  position: sticky;
  top: 0px;
  background-color: #fff;
  z-index: 999;
  margin-bottom: 10px;
  padding: 0 40px;
  flex: 70px 0 0;
`;

const StyledHeaderTitle = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #383838;
`;

export default PaymentsHeader;
