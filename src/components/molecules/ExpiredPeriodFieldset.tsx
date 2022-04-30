import React from "react";
import ExpiredPeriodInputContainer from "../atoms/card-expired-period/ExpiredPeriodInputContainer";
import { Body, Fieldset, Head } from "../templates/Fieldset";

function ExpiredPeriodFieldset() {
  return (
    <Fieldset>
      <Head>
        <label>만료일</label>
      </Head>
      <Body>
        <ExpiredPeriodInputContainer />
      </Body>
    </Fieldset>
  );
}

export default ExpiredPeriodFieldset;
