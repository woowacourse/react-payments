import { css } from "@emotion/react";
import FormField, { type FormFieldProps } from "../ui/FormField";
import Input from "../ui/Input";
import type { CardInfo } from "../../pages/AddCardPage";

interface ExpirationPeriodFieldProps {
    value: CardInfo["expirationPeriod"];
    onUpdated: (value: CardInfo["expirationPeriod"]) => void;
}

export default function ExpirationPeriodField({ value, onUpdated }: ExpirationPeriodFieldProps) {
    const formFieldProps: Omit<FormFieldProps, 'children'> = {
        title: '카드 유효기간을 입력해 주세요',
        caption: '월/년도(MMYY)를 순서대로 입력해 주세요.',
        error: false,
        errorMessage: ''
    }

    return (
        <FormField {...formFieldProps}>
            <fieldset >
                <legend css={legendStyle}>
                    유효기간
                </legend>
                <div css={inputGroupStyle}>
                    <Input value={value[0]} type="text" inputMode="numeric" placeholder="MM" maxLength={2} />
                    <Input value={value[1]} type="text" inputMode="numeric" placeholder="YY" maxLength={2} />
                </div>
            </fieldset>
        </FormField>
    )
}

const legendStyle = css`
    margin-bottom: 8px;
`

const inputGroupStyle = css`
    display: flex;
    gap: 10px;
`