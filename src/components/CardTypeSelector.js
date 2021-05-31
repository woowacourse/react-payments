import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import CardTypeRadio from "./shared/CardTypeRadio";
import apiRequest from "../apiRequest";

const CardTypeSelector = ({ cardTypeName, onRadioChange }) => {
  const [cardTypes, setCardTypes] = useState([]);

  useEffect(() => {
    const fetchCardTypes = async () => {
      const fetchedCardTypes = await apiRequest.cardType.get();

      setCardTypes(fetchedCardTypes);
    };

    fetchCardTypes();
  }, []);

  return (
    <form className="card-type-radio-box">
      {cardTypes.map((value) => (
        <CardTypeRadio
          key={value.name + value.color}
          cardType={value}
          groupName="card-type"
          isChecked={value.name === cardTypeName}
          value={JSON.stringify(value)}
          onChange={onRadioChange}
        />
      ))}
    </form>
  );
};

CardTypeSelector.propTypes = {
  cardTypeName: PropTypes.string.isRequired,
  onRadioChange: PropTypes.func.isRequired,
};

export default CardTypeSelector;
