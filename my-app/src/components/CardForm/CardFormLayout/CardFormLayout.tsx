import { css } from "@emotion/react";

const CardFormLayout = ({
  children,
  isValid,
  onSubmit,
}: {
  children: React.ReactNode;
  isValid: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <>
      <div
        css={css`
          width: 100%;
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
          scrollbar-width: none;
          &::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        <form id="card-form" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
      {isValid && (
        <button
          form="card-form"
          css={css`
            width: calc(100% + 60px);
            margin-bottom: -30px;
            background: #333333;
            color: #f3f3f3;
            height: 52px;
          `}
        >
          확인
        </button>
      )}
    </>
  );
};

export default CardFormLayout;
