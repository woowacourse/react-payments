import React from 'react';
import PropTypes from 'prop-types';

const ColorSelectButton = (props) => {
  const { company, onClick } = props;

  const companyColorTable = {
    포코: 'bg-poco',
    준: 'bg-june',
    공원: 'bg-park',
    로이드: 'bg-roid',
    티케: 'bg-tyche',
    은현: 'bg-eunhyun',
    유조: 'bg-yujo',
    윤호: 'bg-yunho',
  };

  return (
    <li className="mt-4 list-none" onClick={onClick} data-company={company}>
      <button className="flex flex-col items-center justify-center w-16 h-16 text-center">
        <div className={`w-10 h-10 rounded-full justify-center ${companyColorTable[company]}`}></div>
        <span className="mt-1 text-black-700 text-xs">{`${company} 카드`}</span>
      </button>
    </li>
  );
};

export default ColorSelectButton;

ColorSelectButton.propTypes = {
  company: PropTypes.string.isRequired,
};
