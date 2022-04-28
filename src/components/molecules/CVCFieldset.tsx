import React from "react";
import CVCInputContainer from "../atoms/card-cvc/CVCInputContainer";
import { Body, Fieldset, Head } from "../templates/Fieldset";

function CVCFieldset() {
  return (
    <Fieldset>
      <Head>
        <label htmlFor="card-cvc-input">보안 코드(CVC/CVV)</label>
      </Head>
      <Body>
        <div className="d-flex align-items-center">
          <CVCInputContainer />
          <div className="helptip">
            <div className="helptip-content">
              CVC(Card Validation Code)는 Visa, MasterCard, Discover 카드의 뒷면과 아메리칸 익스프레스 카드의 앞면에 있는 3자리 또는 4자리 코드이다.
            </div>
          </div>
        </div>
      </Body>
    </Fieldset>
  )
}

export default CVCFieldset;
