import { css } from "@emotion/react";
type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const EmptyState = ({ icon, title, description }: Props) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        margin-top: 100px;
      `}
    >
      {icon}
      <h2
        css={css`
          font-weight: 700;
          font-style: Bold;
          font-size: 20px;
        `}
      >
        {title}
      </h2>
      <p
        css={css`
          font-weight: 400;
          font-size: 12px;
          color: #8c8c8c;
        `}
      >
        {description}
      </p>
    </div>
  );
};

export default EmptyState;
