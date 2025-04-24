import { TitleStyles } from "./Title.styled";

export interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return <TitleStyles>{title}</TitleStyles>;
}
