import styled from 'styled-components';

const size = {
  large: {
    width: 11.5 * 1.601,
    height: '11.5',
    fontSize: '1.15',
  },
  medium: {
    width: 8.5 * 1.601,
    height: '8.5',
    fontSize: '0.85',
  },
  small: {
    width: 8.15 * 1.601,
    height: '8.15',
    fontSize: '0.815',
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

const Container = styled.div`
  width: ${(props) => `${size[props.size].width}rem`};
  height: ${(props) => `${size[props.size].height}rem`};
  border-radius: 0.4rem;
  box-shadow: 0.25rem 0.25rem 0.375rem 0.125rem rgba(0, 0, 0, 0.2);
  background-color: ${(props) => (props.company ? company[props.company].color : '#D2D2D2')};
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inner = styled.div`
  margin: 0;
  width: 87%;
  height: 82%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  letter-spacing: ${(props) => (props.isBlind ? '-0.3rem' : '0.25rem')};
  width: 20%;
  text-align: center;
  font-weight: 500;
`;

const Footer = styled.div`
  width: 96%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-weight: 500;
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
  Footer,
  Owner,
  ValidDay,
};
