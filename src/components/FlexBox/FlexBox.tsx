import * as S from './style';
import * as T from './type';

interface FlexBoxProps extends T.FlexBox {
  children: React.ReactNode;
}

function FlexBox({
  children, direction, justifyContent, alignItems
}: FlexBoxProps) {
  return (
    <S.FlexBox direction={direction} justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </S.FlexBox>
  );
}

export default FlexBox;
