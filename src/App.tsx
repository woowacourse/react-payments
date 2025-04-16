import "./App.css";
import styled from "styled-components";
import CardPreview from "./components/cardPreview/CardPreview";
import CardNumberSection from "./components/cardNumberSection/CardNumberSection";
import CardExpirationPeriodSection from "./components/cardExpirationPeriodSection/CardExpirationPeriodSection";
import CardCVCNumberSection from "./components/cardCVCNumberSection/CardCVCNumberSection";


const StyleFrame = styled.div`
display: inline-flex;
padding: 77px 30px 19px 31px;
flex-direction: column;
justify-content: flex-end;
align-items : center;
gap: 45px;
background-color: white;
width: 100%;
max-width: 600px;
box-sizing: border-box;
`


function App() {
  return (
    <StyleFrame>
      <CardPreview />
      <CardNumberSection/>
      <CardExpirationPeriodSection/>
      <CardCVCNumberSection />
    </StyleFrame>
  );
}

export default App;
