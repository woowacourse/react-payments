import React from "react";

interface CardExpirationProps {
  month: number;
  year: number;
}

const CardExpiration = ({ month, year }: CardExpirationProps) => {
  return (
    <>
      {month !== 0 && <span>{month}/</span>}
      {year !== 0 && <span>{year}</span>}
    </>
  );
};

export default CardExpiration;
