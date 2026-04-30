import { css } from "@emotion/react";

export default function FieldCaption({ children }: { children: React.ReactNode }) {
    return (
        <span css={fieldCaptionTypography}>{children}</span>
    )
}

const fieldCaptionTypography = css`
    font-size: 9.5px;
    color: var(--color-text-caption);
    padding: 2px 0 1px 0;
`;

