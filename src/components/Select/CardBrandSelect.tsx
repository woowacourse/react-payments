import styled from '@emotion/styled';
import { useState } from 'react';
import arrow from '../../../public/chevron-up.svg';

interface SelectOptions {
    value: string;
    label: string;
}

interface CardBrandSelectProps {
    options: SelectOptions[];
    placeholder?: string;
    selectedValue?: string;
    setSelectedValue?: (selectedValue: string) => void;
}

export default function CardBrandSelect({
    options,
    placeholder,
    selectedValue,
    setSelectedValue,
}: CardBrandSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <CardBrandSelectContainer>
            <CardBrandSelectStyle value={selectedValue} onClick={() => setIsOpen((prev) => !prev)}>
                {selectedValue ? options.find((o) => o.value === selectedValue)?.label : placeholder}
                <ArrowImage src={arrow} />
            </CardBrandSelectStyle>
            {isOpen && (
                <BrandOptionList>
                    {options.map((option) => (
                        <BrandOptionElement
                            onClick={() => {
                                setSelectedValue(option.value);
                                setIsOpen(false);
                            }}
                            value={option.value}
                        >
                            {option.label}
                        </BrandOptionElement>
                    ))}
                </BrandOptionList>
            )}
        </CardBrandSelectContainer>
    );
}

const CardBrandSelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const CardBrandSelectStyle = styled.button`
    width: 315px;
    height: 31.28px;
    border-radius: 2.66px;
    border: 1px solid black;
    box-sizing: border-box;
    padding: 8px;
    background-color: white;
    font-weight: 400;
    font-size: 10.63px;
    display: flex;
    text-align: start;
    position: relative;
`;

const BrandOptionList = styled.ul`
    margin-top: 4.72px;
    z-index: 100;
    position: absolute;
    width: 100%;
    top: 36px;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: white;
    border: 1px solid #acacac;
    border-radius: 5.31px;
`;

const BrandOptionElement = styled.li`
    width: 100%;
    height: 30.94px;
    box-sizing: border-box;
    padding: 7.97px;
    font-weight: 400;
    font-size: 10.63px;
    color: #acacac;
`;

const ArrowImage = styled.img`
    position: absolute;
    right: 8px;
    top: 8px;
`;
