import styled from 'styled-components';

interface HeaderProps {
  title: string;
  render?: () => JSX.Element;
}

export function Header(props: HeaderProps) {
  const { title, render } = props;
  return (
    <_Header>
      {render && render()}
      <_Title>{title}</_Title>
    </_Header>
  );
}

const _Header = styled.header`
  position: relative;

  display: flex;
  justify-content: start;
  align-items: center;
  height: 5.6rem;

  margin-bottom: 2rem;

  width: 100%;
`;

const _Title = styled.h2`
  font: ${(props) => props.theme.text.title};
  margin-left: 5rem;
`;
