import { BRAND_SELECT_OPTIONS } from '../../constants/BRAND_SELECT_OPTIONS';
import type { CardBrandValue } from '../../types/CardBrandValue';
import CardBrandSelect from '../Select/CardBrandSelect';
import CardInputWrapper from './CardInputWrapper';
import CardInfoSection from '../CardInfoSection';

interface CardBrandInputWrapperProps {
    selectedValue?: string;
    setSelectedValue: (selectedValue: CardBrandValue) => void;
    isRender?: boolean;
}

export default function CardBrandInputWrapper({ selectedValue, setSelectedValue, isRender }: CardBrandInputWrapperProps) {
    return (
        <CardInfoSection
            title="카드사를 선택해 주세요"
            caption="현재 국내 카드사만 가능합니다."
            isRender={isRender}
        >
            <CardInputWrapper>
                <CardBrandSelect
                    options={BRAND_SELECT_OPTIONS}
                    placeholder="카드사를 선택해주세요"
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                />
            </CardInputWrapper>
        </CardInfoSection>
    );
}
