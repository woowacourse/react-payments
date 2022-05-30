import styled from 'styled-components';

function InfoLabel() {
  return <InfoLabelContainer>?</InfoLabelContainer>;
}

export default InfoLabel;

const InfoLabelContainer = styled.div`
  display: inline-block;
  width: 27px;
  height: 27px;
  padding-top: 3px;
  border-radius: 13.5px;
  border: 1px solid #bababa;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.085em;
  text-align: center;
  color: #969696;
  cursor: pointer;

  &:hover {
    border: 1px solid #04c09e;
    color: #04c09e;
  }
`;
