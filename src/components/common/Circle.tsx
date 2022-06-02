interface CircleProps {
  theme: string;
}

const Circle = ({ theme }: CircleProps) => {
  return <div className={`modal-item-dot bg-${theme}`}></div>;
};

export default Circle;
