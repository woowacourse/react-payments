/** @jsxImportSource @emotion/react */

interface ProgressBarProps {
  curProgress: number;
  totalProgress: number;
}

export default function ProgressBar({
  curProgress,
  totalProgress,
}: ProgressBarProps) {
  return (
    <div css={styledTotalProgressBar}>
      <div css={styledCurProgressBar(curProgress / totalProgress)}></div>
    </div>
  );
}

const styledTotalProgressBar = {
  width: "100%",
  height: "5px",
  backgroundColor: "rgba(0,0,0,0.3)",
  borderRadius: "4px",

  marginBottom: "15px",
};

const styledCurProgressBar = (percent: number) => {
  return {
    width: `${percent === 0 ? "15px" : `${percent * 100}%`}`,
    height: "5px",
    borderRadius: "4px",
    backgroundColor: "#333333",
  };
};
