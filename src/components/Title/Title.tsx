export interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps) {
  return <h2>{title}</h2>;
}

export default Title;
