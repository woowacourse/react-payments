import styled from "styled-components";

export interface SubtitleProps {
  subtitle: string;
}

const SubtitleCSS = styled.p``;

function Subtitle({ subtitle }: SubtitleProps) {
  return <SubtitleCSS>{subtitle}</SubtitleCSS>;
}

export default Subtitle;
