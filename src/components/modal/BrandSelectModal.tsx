import ModalButton from "./ModalButton";
import styled from "styled-components";

import React from "react";
import { BRANDS } from "../../constants";

interface BrandSelectProps {
  closeModal: () => void;
}

const BrandSelectButtons = ({ closeModal }: React.PropsWithChildren<BrandSelectProps>) => {
  return (
    <Contents>
      {BRANDS.map((brand) => (
        <ModalButton key={brand} brand={brand} closeModal={closeModal} />
      ))}
    </Contents>
  );
};

const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 24px;
  justify-items: center;
`;

export default React.memo(BrandSelectButtons);
