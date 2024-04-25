import Input from '../Input/Input';
import styles from '../../../App.module.css';
import dropDownStyles from './DropDown.module.css';
import { COMPANY_LIST, CardCompany } from '../../../types/cardCompany';
import { useState } from 'react';
import arrow from '../../../assets/image/arrow.svg';

type DropDown = {
  itemList: Record<CardCompany, string>;
  placeholder?: string;
  selected: CardCompany;
  handleSelectItem: (selected: string) => void;
  isError: boolean;
};

const DropDown = ({ itemList, placeholder, handleSelectItem, selected, isError }: DropDown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  // TODO: 리펙터링
  return (
    <>
      <div
        className={styles.horizon__gap__container}
        onClick={() => {
          handleIsOpen();

          // 열려있는 상태에서 아무것도 선택하지 않고 닫을 때
          if (isOpen) handleSelectItem('');
        }}>
        <Input
          readOnly
          value={selected ? COMPANY_LIST[selected] : ''}
          placeholder={placeholder}
          isError={isError && !isOpen}
        />
        <img src={arrow} className={`${dropDownStyles['dropdown-arrow']} ${isOpen ? dropDownStyles.rotated : ''}`} />
      </div>
      {isOpen && (
        <ul className={dropDownStyles.dropdown}>
          {Object.entries(itemList).map(([key, value]) => (
            <li>
              <button
                onClick={() => {
                  handleIsOpen();
                  handleSelectItem(key);
                }}>
                {value}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default DropDown;
