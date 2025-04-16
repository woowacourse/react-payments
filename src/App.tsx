/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import './App.css'
import CardNumber from './components/CardNumber'
import CardExpirationDate from './components/CardExpirationDate'
import CardCVCNumber from './components/CardCVCNumber'

function App() {
  return (
    <div
      css={css`
        width: 480px;
        height: 100vh;
        margin: 0 auto;
        border: 1px solid #000;
        padding: 71px 31px;
      `}
    >
      <CardNumber />
      <CardExpirationDate />
      <CardCVCNumber />
    </div>
  )
}

export default App
