import styled from 'styled-components';

type LabelProps = {
  htmlFor: string;
  description: string;
};

const ScreenReaderOnly = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  border: 0;
  clip: rect(0 0 0 0);
`;

export default function ScreenReaderOnlyLabel({ htmlFor, description }: LabelProps) {
  return <ScreenReaderOnly htmlFor={htmlFor}>{description}</ScreenReaderOnly>;
}
