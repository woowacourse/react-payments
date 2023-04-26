import styled from "styled-components";

interface InputLabelProps {
  text: string;
  render?: () => JSX.Element;
}

export function InputLabel(props: InputLabelProps) {
  const { text, render } = props;

  return (
    <TitleWrapper>
      {text}
      {render && render()}
    </TitleWrapper>
  );
}

const TitleWrapper = styled.h2`
  display: flex;
  justify-content: space-between;
`;
