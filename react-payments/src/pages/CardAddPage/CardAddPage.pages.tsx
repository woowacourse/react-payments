import { useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "component/common/Header/Header.component";
import LinkButton from "component/common/LinkButton/LinkButton.component";
import PageTitle from "component/common/PageTitle/PageTitle.component";
import PageContainer from "component/common/PageContainer/PageContainer.component";
import ColorBoxModal from "component/ColorBoxModal/ColorBoxModal.component";

import { isEdit } from "util/validator";
import CardAddForm from "component/CardAddForm/CardAddForm.component";

const CardAddPage = () => {
  const [isShowModal, toggleShowModal] = useReducer(
    (isShowModal) => !isShowModal,
    false
  );
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <PageContainer type="add">
      <Header>
        <LinkButton
          onClick={() => {
            navigate("/");
          }}
        >
          {"<"}
        </LinkButton>
        <PageTitle type="header">
          {isEdit(id) ? "카드 수정" : "카드 추가"}
        </PageTitle>
      </Header>
      <CardAddForm id={id} toggleShowModal={toggleShowModal} />
      {isShowModal && <ColorBoxModal toggleModal={toggleShowModal} />}
    </PageContainer>
  );
};

export default CardAddPage;
