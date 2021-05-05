import styled from 'styled-components';
import { FlexCenter } from './FlexCenter';

export const PageBody = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const PageHeader = styled(FlexCenter)`
  width: 96%;
  height: 8%;
  margin: 2% 2% 6% 2%;
`;