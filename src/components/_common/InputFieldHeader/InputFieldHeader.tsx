import S from "./style";

interface Props {
  title: string;
  subTitle?: string;
}
const InputFieldHeader = ({ title, subTitle }: Props) => {
  return (
    <S.TitleWrapper>
      <S.InputTitle>{title}</S.InputTitle>
      {subTitle && <S.InputSubtitle>{subTitle}</S.InputSubtitle>}
    </S.TitleWrapper>
  );
};

export default InputFieldHeader;
