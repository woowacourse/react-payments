import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ColorContainer = styled.span`
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
  display: flex;
  background: ${(props) => `radial-gradient(
    circle,
    #FFFFFFDD 0%,
    ${`${props.color}FF 70%`},
    ${`${props.color}FF 100%`}
  )`};
`;

const CompanyColor = styled.span`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: ${(props) => (props.isSelected ? '0.3' : '1')};
  background-color: ${(props) => props.color};
`;

const CompanyName = styled.span`
  margin-top: 0.75rem;
  text-align: center;
  color: ${(props) => (props.isSelected ? '#000000' : '#525252')};
  font-size: 0.75rem;
`;

export { Container, ColorContainer, CompanyColor, CompanyName };
