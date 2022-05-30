import * as S from './ToolTip.styled';

const ToolTip = ({ children, icon, ...rest }) => {
  return (
    <S.ToolTipBox {...rest}>
      {icon}
      <S.ToolTipParagraph>{children}</S.ToolTipParagraph>
    </S.ToolTipBox>
  );
};

export default ToolTip;
