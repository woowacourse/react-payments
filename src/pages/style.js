import styled from 'styled-components'

const PageWrapper = styled.div`
  height: 710px;
  width: 375px;
  background-color: white;
  padding: 25px;
`

const CenterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0;
`

const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  & a {
    text-decoration: none;
    outline: none;
    color: ${(props) => props.theme.colors.MINT};
  }
`

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`

export { PageWrapper, CenterItem, CardWrapper, FooterWrapper, FormWrapper }
