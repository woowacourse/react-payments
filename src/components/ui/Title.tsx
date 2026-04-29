import { css } from "@emotion/react";

export default function Title({ children }: { children: React.ReactNode }) {
    return (
        <h3 css={titleTypography}>{children}</h3>
    )
}

const titleTypography = css`
    font-weight: bold;
    font-size: 18px;
    padding: 2px 0;
    color: var(--color-text-title);
`;

