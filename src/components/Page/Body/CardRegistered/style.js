import styled from 'styled-components';
import { FlexCenter } from '../../../../utils/style/FlexCenter';

const PageContainer = styled(FlexCenter)`
  flex-direction: column;
`;

const MessageContainer = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  margin: 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 400;
  justify-content: center;
  align-items: flex-end;
`;

const CardPreviewContainer = styled(FlexCenter)`
  width: 100%;
  margin: 5rem 0 2.2rem 0;
`;

const CardNickNameFormContainer = styled(FlexCenter)`
  width: 100%;
  margin: 0;
`;

export { MessageContainer, CardPreviewContainer, PageContainer, CardNickNameFormContainer };
