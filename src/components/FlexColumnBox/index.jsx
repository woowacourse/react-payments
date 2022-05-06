import styled from 'styled-components';

export default function FlexColumnBox({ children }) {
  return <Styled.FlexColumnBox>{children}</Styled.FlexColumnBox>;
}

const Styled = {
  FlexColumnBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};
