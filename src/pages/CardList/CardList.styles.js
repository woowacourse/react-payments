import styled from '@emotion/styled';
import { Flex } from '../../styles/mixins';

const Styled = {
  Container: styled.div`
    padding: 0 28px;
    margin-top: 50px;
    ${Flex({ items: 'center', justify: 'center', direction: 'column' })}
  `,
  AddCard: styled.div`
    width: 320px;
    height: 200px;
    border: none;
    border-radius: 7px;
    background-color: #eee;
    ${Flex({ items: 'center', justify: 'center' })}
    transform: scale(0.8);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
  `,

  Row: styled.span`
    ${Flex({ items: 'center', justify: 'center', direction: 'column' })}
    margin-bottom: 20px;
  `,
};

export default Styled;
