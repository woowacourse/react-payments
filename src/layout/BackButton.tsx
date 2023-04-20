import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  path: string;
}

export const BackButton = ({ path }: Props) => {
  const navigate = useNavigate();
  return (
    <Style.Wrapper
      onClick={() => {
        navigate(path);
      }}
    >
      <svg
        width='10'
        height='17'
        viewBox='0 0 10 17'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M8.30426 1L1.36476 8.78658L9.15134 15.7261' stroke='#525252' strokeWidth='1.5' />
      </svg>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.button`
    all: unset;

    display: flex;
    align-items: center;

    width: max-content;

    cursor: pointer;
  `,
};
