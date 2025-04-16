import "./App.css";
import styled from "styled-components";
import CardNumberInputs from "./components/cardNumberInputs/CardNumberInputs";
import CardExpirationPeriodInputs from "./components/cardExpirationPeriodInputs/CardExpirationPeriodInputs";
import CardCVCNumberInputs from "./components/cardCVCNumberInputs/cardCVCNumberInputs";


const StyleFrame = styled.div`
display: inline-flex;
padding: 77px 30px 19px 31px;
flex-direction: column;
justify-content: flex-end;
align-items: center;
gap: 45px;
background-color: red;
width: 100%;
max-width: 600px;
box-sizing: border-box;
`


function App() {
  return (
    <StyleFrame>
      <CardNumberInputs></CardNumberInputs>
      <CardExpirationPeriodInputs></CardExpirationPeriodInputs>
      <CardCVCNumberInputs></CardCVCNumberInputs>
    </StyleFrame>
  );
}

export default App;
