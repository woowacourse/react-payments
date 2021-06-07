import styled from 'styled-components';
import { FlexCenter } from '../../utils/style/FlexCenter';

const size = {
  large: {
    width: 11.5 * 1.601,
    height: '11.5',
    fontSize: '1.15',
    dotSize: '0.35',
    spacing: '0.15',
  },
  medium: {
    width: 8.5 * 1.601,
    height: '8.5',
    fontSize: '0.85',
    dotSize: '0.25',
    spacing: '0.1',
  },
  small: {
    width: 8.15 * 1.601,
    height: '8.15',
    fontSize: '0.815',
    dotSize: '0.25',
    spacing: '0.08',
  },
};

const company = {
  포코: {
    color: '#E24141',
  },
  준: {
    color: '#547CE4',
  },
  공원: {
    color: '#73BC6D',
  },
  브랜: {
    color: '#DE59B9',
  },
  로이드: {
    color: '#94DACD',
  },
  도비: {
    color: '#E76E9A',
  },
  콜린: {
    color: '#F37D3B',
  },
  썬: {
    color: '#FBCD58',
  },
};

const Container = styled(FlexCenter)`
  width: ${(props) => `${size[props.size].width}rem`};
  height: ${(props) => `${size[props.size].height}rem`};
  border-radius: 0.4rem;
  box-shadow: 0.1rem 0.1rem 0.25rem 0.1rem rgba(0, 0, 0, 0.2);
  background-color: ${(props) => (props.company ? company[props.company].color : '#D2D2D2')};
  margin: 0;
  ${(props) => props.size !== 'large' && 'cursor: pointer'}
`;

const Inner = styled(FlexCenter)`
  margin: 0;
  width: 87%;
  height: 82%;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 34%;
  font-size: ${(props) => `${size[props.size].fontSize * 0.8}rem`};
`;

const Company = styled.div`
  font-weight: 400;
`;

const Body = styled.div`
  width: 100%;
  height: 60%;
`;

const IcChip = styled.div`
  width: 20.5%;
  height: 42%;
  border-radius: 0.3rem;
  background-color: #cbba64;
`;

const NumbersContainer = styled.div`
  height: 48%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  width: 100%;
  font-size: ${(props) => `${size[props.size].fontSize}rem`};
`;

const Numbers = styled.div`
  letter-spacing: ${(props) => `${size[props.size].spacing}rem`};
  width: 20%;
  min-width: 20%;
  text-align: center;
  font-weight: 500;
  color: #525252;
`;

const BlindNumbers = styled.div`
  width: 20%;
  min-width: 20%;
  height: 65%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const BlindDot = styled.span`
  width: ${(props) => `${size[props.size].dotSize}rem`};
  height: ${(props) => `${size[props.size].dotSize}rem`};
  border-radius: 50%;
  background-color: #616161;
`;

const Footer = styled.div`
  width: 96%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-weight: 500;
  color: #525252;
  font-size: ${(props) => `${size[props.size].fontSize * 0.9}rem`};
  letter-spacing: 0.12rem;
`;

const Owner = styled.span``;

const ValidDay = styled.span``;

export {
  Container,
  Inner,
  Header,
  Company,
  Body,
  IcChip,
  NumbersContainer,
  Numbers,
  BlindNumbers,
  BlindDot,
  Footer,
  Owner,
  ValidDay,
};
