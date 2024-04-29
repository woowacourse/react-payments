import { CVCStateType } from '../../hooks/useCVC';
import * as Styled from './style';

interface BackOfTheCardProps {
  cvcState: CVCStateType;
}

const BackOfTheCard = ({ cvcState }: BackOfTheCardProps) => {
  return (
    <Styled.BackOfTheCard onClick={() => cvcState.setIsFocus((prev) => !prev)}>
      <Styled.CVCContainer>
        <Styled.CVC>{cvcState.value}</Styled.CVC>
      </Styled.CVCContainer>
    </Styled.BackOfTheCard>
  );
};

export default BackOfTheCard;
