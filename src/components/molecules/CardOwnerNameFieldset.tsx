import React from "react";
import { MAX_NAME_LENGTH } from "../../constants";
import { useAppState } from "../../hooks/hooks";
import CardOwnerNameInputContainer from "../atoms/card-owner/CardOwnerNameInputContainer";
import { Body, Fieldset, Head } from "../templates/Fieldset";

function CardOwnerNameFieldset() {
  const { name } = useAppState();

  return (
    <Fieldset>
      <Head>
        <div className="d-flex justify-content-between">
          <label>카드 소유자 이름(선택)</label>
          <div id="counter">
            <span>{name.length}</span>/<span>{MAX_NAME_LENGTH}</span>
          </div>
        </div>
      </Head>
      <Body>
        <CardOwnerNameInputContainer />
      </Body>
    </Fieldset>
  );
}

export default CardOwnerNameFieldset;
