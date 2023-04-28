import * as S from './style';
import * as T from './type';

interface FlexBoxProps extends T.FlexBox {
  children: React.ReactNode;
}

function FlexBox({ children, justifyContent, alignItems }: FlexBoxProps) {
  return (
    <S.FlexBox justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </S.FlexBox>
  );
}

export default FlexBox;
