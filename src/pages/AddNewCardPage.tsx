import CardInfoForm from "@/components/feature/CardInfoFormSection";
import styled from "@emotion/styled";

const AddNewCardPage = () => (
  <PageWrapper>
    <CardInfoForm />
  </PageWrapper>
);

const PageWrapper = styled.div`
  max-width: 23rem;
  margin-inline: auto;
`;

export default AddNewCardPage;
