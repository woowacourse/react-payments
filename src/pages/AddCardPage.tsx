import { css } from "@emotion/react";
import CardNumbersField from "../components/domain/CardNumbersField";
import ExpirationPeriodField from "../components/domain/ExpirationPeriodField";
import CVCField from "../components/domain/CVCField";

export default function AddCardPage() {
    return (
        <div css={mobileLayout}>
            <main >
                {/* <Card /> */}
                <form css={formLayout}>
                    <CardNumbersField />
                    <ExpirationPeriodField />
                    <CVCField />
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
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    padding: 20px 30px;
    overflow: scroll;
    border-radius: 20px;
`;

const formLayout = css`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
