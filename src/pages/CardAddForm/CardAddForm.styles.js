import styled from '@emotion/styled';

const Styled = {
  Container: styled.div`
    padding: 0 28px;
  `,
  Row: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.right ? 'flex-end' : 'flex-start')};
  `,
  RowItem: styled.div``,
  ExpiryDate: styled.div`
    width: 137px;
  `,
  CVC: styled.div`
    width: 84px;
  `,
  ToolTip: styled.div`
    flex: 1;
    margin-left: 0.5em;
  `,
};

export default Styled;
