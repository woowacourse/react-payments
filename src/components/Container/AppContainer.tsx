import styled, { css } from 'styled-components';

const StyledPage = styled.div`
  background: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 400px;
  height: 757px;

  ${({ alignItems }: Pick<Props, 'alignItems'>) => css`
    align-items: ${alignItems};
  `}
`;

type Props = {
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  children: React.ReactNode;
};

export default function AppContainer({ alignItems, children }: Props) {
  return <StyledPage alignItems={alignItems}>{children}</StyledPage>;
}
