import styled from "styled-components";

export interface TitleProps {
  title: string;
}

const TitleCSS = styled.h2``;

function Title({ title }: TitleProps) {
  return <TitleCSS>{title}</TitleCSS>;
}

export default Title;
