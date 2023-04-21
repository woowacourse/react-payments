import styled from 'styled-components';

import { useCountText } from '../../hooks/useCountText';

export function CountText(maxLength: number) {
  const { count } = useCountText();

  return (
    <Wrapper>
      {count}/{maxLength}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0.1rem;
  right: 0;

  font: var(--text-caption);

  display: flex;
`;
