import { sectionTitle, sectionTitleSubText, sectionTitleText } from "../../../styles/@common/text.style.ts";

type TitleProps = {
  title: string;
  subTitle?: string;
}

function Title({title, subTitle}: TitleProps) {
  return (
    <div css={sectionTitle}>
      <span css={sectionTitleText}>{title}</span>
      <span css={sectionTitleSubText}>{subTitle}</span>
    </div>
  )
}

export default Title;
