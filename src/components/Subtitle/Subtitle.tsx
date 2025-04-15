export interface SubtitleProps {
  subtitle: string;
}

function Subtitle({ subtitle }: SubtitleProps) {
  return <p>{subtitle}</p>;
}

export default Subtitle;
