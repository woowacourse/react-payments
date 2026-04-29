import { css } from "@emotion/react";

export default function AddCardPage() {
    return (
        <div css={mobileLayout}>
            <main >
                {/* <Card /> */}
                <form>
                    {/* <CardNumbersField />
                    <ExpirationPeriodField />
                    <CVCField /> */}
                </form>
            </main>
        </div>
    )
};

const mobileLayout = css`
    display: flex;
    flex-direction: column;
    width: 376px;
    height: 700px;
`;

