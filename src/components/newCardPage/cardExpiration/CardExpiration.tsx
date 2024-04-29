export interface CardExpirationProps {
  month: string;
  year: string;
}

const CardExpiration = ({ month, year }: CardExpirationProps) => {
  return (
    <div>
      {month !== "" && <span>{month}/</span>}
      {year !== "" && <span>{year}</span>}
    </div>
  );
};

export default CardExpiration;
