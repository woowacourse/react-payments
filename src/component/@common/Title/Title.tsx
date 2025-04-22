import { PropsWithChildren } from 'react';
import {
  sectionTitle,
  sectionTitleSubText,
  sectionTitleText,
} from '../../../styles/@common/text.style';

function Title({ children }: PropsWithChildren) {
  return <div css={sectionTitle}>{children}</div>;
}

function Text({ children }: PropsWithChildren) {
  return <span css={sectionTitleText}>{children}</span>;
}

function SubTitle({ children }: PropsWithChildren) {
  return <span css={sectionTitleSubText}>{children}</span>;
}

Title.Text = Text;
Title.SubTitle = SubTitle;

export default Title;
