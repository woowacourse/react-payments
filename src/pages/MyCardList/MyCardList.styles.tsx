import styled from 'styled-components';
import Flex from '../../components/@common/Flex/Flex';

export const Root = styled(Flex)`
  height: 100%;
  overflow: scroll;

  padding: 50px 0;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 46px;
  }
`;

export const Alias = styled.label`
  width: 100%;
  height: 30px;
  line-height: 30px;

  margin-top: 10px;
  text-align: center;

  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray4};
`;
