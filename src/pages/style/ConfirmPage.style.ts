import styled from 'styled-components';

import STYLE from '../../constants/style';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Confirm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 0 32px;
  width: 100%;
  max-width: 375px;
`;

export const Title = styled.h1`
  font-weight: ${STYLE.BOLD.title};
  color: ${STYLE.COLOR.black50};
  font-size: 25px;
  text-align: center;
  line-height: 37px;
`;

export const Image = styled.img`
  width: 76px;
  height: 76px;
  margin-bottom: 10px;
`;
