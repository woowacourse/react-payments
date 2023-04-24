interface Props {
  width?: number;
  height?: number;
}

const Spacer = ({ width = 1, height = 1 }: Props) => {
  return (
    <div
      aria-hidden
      style={{
        width,
        height,
      }}
    />
  );
};

export default Spacer;
