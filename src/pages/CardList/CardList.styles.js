import styled from '@emotion/styled';
import { Flex } from '../../styles/mixins';

const Styled = {
  Container: styled.div`
    margin: 65px 0;
  `,

  Spinner: styled.div`
    ${Flex({ justify: 'center', items: 'center' })};
  `,

  CardList: styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
  `,

  CardItem: styled.li`
    ${Flex({ direction: 'column', items: 'center' })};
    margin-bottom: ${(props) => (props.noCardName ? '57px' : '32px')};

    a {
      text-decoration: none;
      color: inherit;
    }
  `,

  CardNickName: styled.span`
    font-weight: bold;
    font-size: 14px;
    color: ${(props) => props.theme.color.cardItem};
    opacity: 0.9;
    margin-top: 5px;
  `,
};

export default Styled;
