import { Wrapper } from './CardInfoHeader.styles';

interface Props {
  title: string;
  description: string;
}

export default function CardInfoHeader({ title, description }: Props) {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <p>{description}</p>
    </Wrapper>
  );
}
