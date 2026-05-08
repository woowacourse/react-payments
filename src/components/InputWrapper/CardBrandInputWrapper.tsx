import CardBrandSelect from '../Select/CardBrandSelect';
import CardInputWrapper from './CardInputWrapper';

const BRAND_SELECT_OPTIONS = [
    { value: 'BC', label: 'BC카드' },
    { value: 'SHINHAN', label: '신한카드' },
    { value: 'KAKAO', label: '카카오뱅크' },
    { value: 'HYUNDAI', label: '현대카드' },
    { value: 'WOORI', label: '우리카드' },
    { value: 'LOTTE', label: '롯데카드' },
    { value: 'HANA', label: '하나카드' },
    { value: 'KB', label: '국민카드' },
];

export type CardBrandValue = 'BC' | 'SHINHAN' | 'KAKAO' | 'HYUNDAI' | 'WOORI' | 'LOTTE' | 'HANA' | 'KB';
// BC 신한 카카오뱅크 현대 우리 롯데 하나 국민

interface CardBrandInputWrapperProps {
    selectedValue?: string;
    setSelectedValue?: (selectedValue: CardBrandValue) => void;
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
