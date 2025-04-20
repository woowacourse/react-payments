import { SubtitleCSS } from "./Subtitle.styled";

export interface SubtitleProps {
  subtitle: string;
}

function Subtitle({ subtitle }: SubtitleProps) {
  return <SubtitleCSS>{subtitle}</SubtitleCSS>;
}

export default Subtitle;
