import { CARD_BRAND } from '../constants/cardBrand';
import FieldTitle from './FieldTitle';
import InputField from './InputComponent/InputField';
import styled from 'styled-components';
import arrow_bottom from '../assets/image/arrow-bottom.svg';
import arrow_top from '../assets/image/arrow-top.svg';
import { useState } from 'react';

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// TODO
// const DropdownHeader = styled.div<{ $clicked: boolean }>`
//   padding: 10px;
//   border: 1px solid ${(props) => (props.$clicked ? '#000' : '#ddd')};
//   border-radius: 5px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: #fff;
//   box-sizing: border-box;
// `;

// const DropdownHeaderTitle = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: #fff;
// `;

// const DropdownList = styled.ul`
//   background-color: #fff;
//   border: 1px solid #ddd;
//   padding: 0;
//   margin: 10px 0;
//   list-style-type: none;
// `;

const DropDown = styled.select<{$isOpen:boolean}>`
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 5px;
  height: 2rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  background-position: right 10px center;
  background-repeat: no-repeat;
  cursor: pointer;
  background-image: url(${props => props.$isOpen ?  arrow_bottom : arrow_top});
`

const ListItem = styled.option`
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
`;
interface Props {
  handleInput: {
    handleUpdateCardBrand: (brandName: string) => void;
    handleUpdateCardBrandIsNextField: () => void;
  };
}
export default function CardDropDown({
  handleInput: { handleUpdateCardBrand, handleUpdateCardBrandIsNextField },
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const brandName = event.target.value;
    handleUpdateCardBrand(brandName);
    handleUpdateCardBrandIsNextField();
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <>
      <FieldTitle
        title='카드사를 선택해 주세요'
        subtitle='현재 국내 카드사만 가능합니다.'
      />
      <InputField
        label='카드사'
        count={4}
        errorMessages={''}
      >
        <DropdownContainer>
        <DropDown
            name='cardBrand'
            onChange={handleSelectChange}
            onClick={() => setIsOpen(!isOpen)}
            onBlur={() => setIsOpen(false)}
            $isOpen={isOpen}
          >
            <ListItem disabled selected>{'카드사를 선택해주세요'}</ListItem>
            {Object.entries(CARD_BRAND).map(([brandName]) => {
                return (
                  <ListItem
                    key={brandName}
                    value={brandName}
                  >
                    {brandName}
                  </ListItem>
                );
              })}
          </DropDown>
        </DropdownContainer>
      </InputField>
    </>
  );
}

// TODO
// export default function CardDropDown({
//   handleInput: { handleUpdateCardBrand, handleUpdateCardBrandIsNextField },
// }: Props) {
//   const [view, setView] = useState<boolean>(false);
//   const [selected, setSelected] = useState('카드사를 선택해주세요');

//   const handleSelectBrand = (brandName: string) => {
//     handleUpdateCardBrand(brandName);
//     handleUpdateCardBrandIsNextField();
//     setView(!view);
//     setSelected(brandName);
//   };

//   return (
//     <>
//       <FieldTitle
//         title='카드사를 선택해 주세요'
//         subtitle='현재 국내 카드사만 가능합니다.'
//       />
//       <InputField
//         label='카드사'
//         count={4}
//         errorMessages={''}
//       >
//         <DropdownContainer>
//           <DropdownHeader
//             $clicked={view}
//             onClick={() => setView(!view)}
//             role='button'
//             aria-haspopup='listbox'
//             aria-expanded={view}
//           >
//             <DropdownHeaderTitle>{selected}</DropdownHeaderTitle>
//             <img src={view ? arrow_bottom : arrow_top} />
//           </DropdownHeader>
//           {view && (
//             <DropdownList role='listbox'>
//               {Object.entries(CARD_BRAND).map(([brandName]) => {
//                 return (
//                   <ListItem
//                     key={brandName}
//                     role='option'
//                     onClick={() => handleSelectBrand(brandName)}
//                   >
//                     {brandName}
//                   </ListItem>
//                 );
//               })}
//             </DropdownList>
//           )}
//         </DropdownContainer>
//       </InputField>
//     </>
//   );
// }
