import { css } from "@emotion/react";

export default function Caption({ children }: { children: React.ReactNode }) {
    return (
        <span css={captionTypography}>{children}</span>
    )
}

const captionTypography = css`
    font-size: 9.5px;
    color: var(--color-text-caption);
    padding: 2px 0 1px 0;
`;

