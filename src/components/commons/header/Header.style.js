import styled from 'styled-components';

const Styled = {
  Header: styled.div(({ styles }) => ({
    display: 'flex',
    alignItems: 'center',
    fontWeight: '500',
    marginBottom: '22px',
    ...styles,
  })),
};

export default Styled;
