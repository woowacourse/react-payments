import styled from 'styled-components';
import { FlexCenter } from '../../../../../utils/style/FlexCenter';

const Container = styled(FlexCenter)`
  width: 100%;
  flex-direction: column;
  margin: 0;
  margin-bottom: 1.5rem;
`;

const CardNickName = styled(FlexCenter)`
  width: 100%;
  margin: 0.6rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #575757;
`;

export { Container, CardNickName };
