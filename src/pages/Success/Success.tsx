import { SuccessContainer } from "./Success.styled";
import check from "/check.svg";

function Success() {
  return (
    <>
      <SuccessContainer>
        <img src={check} />
      </SuccessContainer>
    </>
  );
}
export default Success;
