import { useNavigate } from 'react-router-dom';

import { ReactComponent as Plus } from 'assets/plus.svg';

import styled from 'styled-components';

function EmptyCard() {
  const navigate = useNavigate();

  return (
    <Styled.Root onClick={() => navigate('/add-card')}>
      <Plus />
    </Styled.Root>
  );
}

const Styled = {
  Root: styled.div`
    background-color: #d2d2d2;
    box-shadow: 3px 3px 5px #00000040;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 125px;
    padding: 19px;
    width: 213px;
  `,
};

export default EmptyCard;
