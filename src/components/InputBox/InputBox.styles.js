import styled from '@emotion/styled';

const Styled = {
  Container: styled.div`
    width: ${(props) => props.width};
    font-size: 16px;
    letter-spacing: -0.085em;
    color: ${(props) => props.theme.color.label};
  `,

  Header: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 12px;
  `,
};

export default Styled;
