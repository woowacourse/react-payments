import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { ReactComponent as Plus } from 'assets/plus.svg';

function EmptyCard() {
  console.log('render empty');
  const navigate = useNavigate();

  return (
    // TODO: 이것도 훅으로 만들어야할까?...지금까지는 계속 비즈니스 로직을 hook으로 분리했었는데..
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
