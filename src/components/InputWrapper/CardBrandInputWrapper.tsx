import { BRAND_SELECT_OPTIONS } from '../../constants/BRAND_SELECT_OPTIONS';
import type { CardBrandValue } from '../../types/CardBrandValue';
import CardBrandSelect from '../Select/CardBrandSelect';
import CardInputWrapper from './CardInputWrapper';

interface CardBrandInputWrapperProps {
    selectedValue?: string;
    setSelectedValue: (selectedValue: CardBrandValue) => void;
}

export default function CardBrandInputWrapper({ selectedValue, setSelectedValue }: CardBrandInputWrapperProps) {
    return (
        <CardInputWrapper>
            <CardBrandSelect
                options={BRAND_SELECT_OPTIONS}
                placeholder="카드사를 선택해주세요"
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
            />
        </CardInputWrapper>
    );
}
