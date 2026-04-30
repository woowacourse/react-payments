import type { CardInfo } from "../../pages/AddCardPage";
import FormField, { type FormFieldProps } from "../ui/FormField";
import Input from "../ui/Input";

interface CVCFieldProps {
    value: CardInfo["cvc"];
    onUpdated: (value: CardInfo["cvc"]) => void;
}

export default function CVCField({ value, onUpdated }: CVCFieldProps) {
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
            <Input value={value} id="cvc" type="text" inputMode="numeric" placeholder="123" maxLength={3} />
        </FormField>
    )
}