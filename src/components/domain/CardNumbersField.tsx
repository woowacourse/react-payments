import { css } from "@emotion/react";
import FormField, { type FormFieldProps } from "../ui/FormField";

export default function CardNumbersField() {
    const formFieldProps: Omit<FormFieldProps, 'children'> = {
        title: '결제할 카드 번호를 입력해 주세요',
        caption: '본인 명의의 카드만 결제 가능합니다.',
        error: false,
        errorMessage: ''
    }

    return (
        <FormField {...formFieldProps}>
            <fieldset >
                <legend css={legendStyle}>
                    카드 번호
                </legend>
                <div>
                    <input />
                    <input />
                    <input />
                    <input />
                </div>
            </fieldset>
        </FormField>
    )
}

const legendStyle = css`
    margin-bottom: 8px;
`