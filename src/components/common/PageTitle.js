import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

export const PageTitle = ({ children, isRoot }) => {
  const navigate = useNavigate();

  return (
    <PageTitleWrapperStyle>
      {!isRoot && (
        <BackwardButton
          onClick={() => {
            navigate(-1);
          }}
        />
      )}
      {children}
    </PageTitleWrapperStyle>
  );
};

const PageTitleWrapperStyle = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackwardButton = styled.span`
  width: 8px;
  height: 8px;
  border: 1px;
  border-style: none none solid solid;
  transform: rotate(45deg);
  cursor: pointer;
`;
