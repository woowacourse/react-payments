import styled from '@emotion/styled';
import { Flex, shakingAnimation } from '../../styles/mixins';

const Styled = {
  Container: styled.div`
    padding: 0 28px;
    margin-top: 50px;

    ${Flex({ items: 'center', justify: 'center', direction: 'column' })}

    li > div {
      ${(props) => (props.deleteMode ? shakingAnimation : '')}
    }
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

  DeleteButton: styled.button`
    color: red;
    position: absolute;
    right: 10%;
    font-size: 1.5rem;
    border-radius: 50%;
    border: none;
    background: none;
    z-index: 999;
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }
  `,
};

export default Styled;
