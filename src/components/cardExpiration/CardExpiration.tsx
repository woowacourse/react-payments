import React from "react";

export interface CardExpirationProps {
  month: number;
  year: number;
}

const CardExpiration = ({ month, year }: CardExpirationProps) => {
  return (
    <div>
      {month !== 0 && <span>{month}/</span>}
      {year !== 0 && <span>{year}</span>}
    </div>
  );
};

export default CardExpiration;
