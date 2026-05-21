import { type SerializedStyles } from '@emotion/react';
import styled from "@emotion/styled";

const Fieldset = styled.fieldset<{ style?: never; customStyle?: SerializedStyles }>`
  border: 0;
  margin: 0;
  padding: 0;
  ${(props) => props.customStyle}
`;

export default Fieldset