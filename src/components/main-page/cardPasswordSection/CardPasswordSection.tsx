import SectionTitle from '../../common/sectionTitle/SectionTitle';
import styled from 'styled-components';

import { CardPasswordSectionProps } from '../../../types/index.types';
import CardPasswordInputs from '../cardPasswordInputs/CardPasswordInputs';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`;

function CardPasswordSection({ password, changePassword }: CardPasswordSectionProps) {
  return (
    <StyledContainer>
      <SectionTitle title="비밀번호를 입력해 주세요" subTitle="앞에 2자리를 입력해주세요" />
      <CardPasswordInputs password={password} changePassword={changePassword} />
    </StyledContainer>
  );
}

export default CardPasswordSection;
