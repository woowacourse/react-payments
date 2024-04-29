interface SpacerProps {
  height?: number;
  width?: number;
}

const Spacer: React.FC<SpacerProps> = ({ height = 1, width = 1 }) => {
  return <div style={{ width: `${width}px`, height: `${height}px` }} />;
};

export default Spacer;
