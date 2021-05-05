import styled from 'styled-components';
import { FlexCenter } from '../../../utils/style/FlexCenter';

const ClickableCardContainer = styled(FlexCenter)`
  width: 13.05rem;
  height: 8.15rem;
  border-radius: 0.4rem;
  background-color: #e5e5e5;
  margin: 0;
  cursor: pointer;
`;

const PlusSign = styled(FlexCenter)`
  width: 100%;
  margin: 0 auto;
  font-size: 2.3rem;
  color: #575757;
`;

export { ClickableCardContainer, PlusSign };
