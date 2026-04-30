import type { CardInfo } from "../../pages/AddCardPage";
import FormField, { type FormFieldProps } from "../ui/FormField";
import Input from "../ui/Input";

export default function CVCField({ onUpdated }: { onUpdated: (value: CardInfo["cvc"]) => void }) {
    const formFieldProps: Omit<FormFieldProps, 'children'> = {
        title: 'CVC 번호를 입력해 주세요',
        caption: '',
        error: false,
        errorMessage: ''
    }

    return (
        <FormField {...formFieldProps}>
            <label htmlFor="cvc">
                CVC
            </label>
            <Input id="cvc" placeholder="123" />
        </FormField>
    )
}