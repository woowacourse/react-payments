import styled from 'styled-components';

import Button from './common/Button';

import { ReactComponent as Arrow } from 'assets/arrow.svg';

const Styled = {
  Root: styled.div`
    align-items: center;
    display: flex;
    margin-bottom: 25px;
  `,

  Title: styled.span`
    font-size: 16px;
    margin-left: 18px;
  `,
};

function Header({ title }) {
  return (
    <Styled.Root>
      <Button size="small">
        <Arrow />
      </Button>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Root>
  );
}

export default Header;
