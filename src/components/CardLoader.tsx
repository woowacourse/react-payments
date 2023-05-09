import styled, { keyframes } from 'styled-components';

const CardLoader = () => {
  return (
    <CardLoaderBackWrapper>
      <CardLoaderWrapper />
    </CardLoaderBackWrapper>
  );
};

const Rotate = keyframes`
0%{
    transform: translateX(0);
}
50%{
    transform: translateX(120px);
}
100%{
    transform: translateX(0);
}
`;

const CardLoaderBackWrapper = styled.div`
  background: #d9d9d9;
  border-radius: 10px;

  width: 240px;
  height: 140px;
`;

const CardLoaderWrapper = styled.div`
  background: #333333;
  border-radius: 10px;

  width: 120px;
  height: 140px;
  animation: ${Rotate} 2s linear infinite;
`;
export default CardLoader;
