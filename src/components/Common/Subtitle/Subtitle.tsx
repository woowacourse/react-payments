import { SubtitleStyles } from "./Subtitle.styled";

export interface SubtitleProps {
  subtitle: string | null;
}

export default function Subtitle({ subtitle }: SubtitleProps) {
  return subtitle !== null && <SubtitleStyles>{subtitle}</SubtitleStyles>;
}
