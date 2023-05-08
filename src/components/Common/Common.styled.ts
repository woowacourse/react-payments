import styled from 'styled-components';

import { COLOR } from '../../constants/card';

export const LabelTextParagraph = styled.p`
  font-size: 16px;
`;

export const ErrorMessageParagraph = styled.p<Record<'isError', boolean>>`
  margin-bottom: 8px;

  visibility: ${props => (props.isError ? 'visible' : 'hidden')};

  color: ${COLOR.RED};
`;
