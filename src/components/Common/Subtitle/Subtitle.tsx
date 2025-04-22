import { SubtitleCSS } from "./Subtitle.styled";

export interface SubtitleProps {
  subtitle: string | null;
}

function Subtitle({ subtitle }: SubtitleProps) {
  return subtitle !== null && <SubtitleCSS>{subtitle}</SubtitleCSS>;
}

export default Subtitle;
