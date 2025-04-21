import { TitleCSS } from "./Title.styled";

export interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps) {
  return <TitleCSS>{title}</TitleCSS>;
}

export default Title;
