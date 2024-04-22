interface SpacerProps {
  space: number;
}

const Spacer: React.FC<SpacerProps> = ({ space }) => {
  return <div style={{ width: '1px', marginBottom: `${space}px` }} />;
};

export default Spacer;
