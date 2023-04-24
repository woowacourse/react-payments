interface CardLabelProps {
  labelText: string;
}

const CardLabel = ({ labelText }: CardLabelProps) => {
  return <label>{labelText}</label>;
};

export default CardLabel;
