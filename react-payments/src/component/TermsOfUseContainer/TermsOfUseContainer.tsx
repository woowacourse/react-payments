import ToggleButton from "component/common/ToggleButton/ToggleButton";
import PaymentLabel from "component/PaymentLabel/PaymentLabel";
import { Dispatch, SetStateAction } from "react";
import Box from "styles/box";
import Text from "styles/text";

function TermsOfUseContainer({
  setChecked,
}: {
  setChecked: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="30px"
      pl="32px"
      pr="32px"
      width="80%"
    >
      <PaymentLabel>약관 이용 및 동의</PaymentLabel>
      <Text fontSize="10px" fontWeight="700" color="#333333">
        거래정보 제공 동의 alming store
      </Text>
      <Box display="flex" justifyContent="space-between">
        <Text fontSize="10px" fontWeight="700" color="#333333">
          주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
        </Text>
        <ToggleButton setChecked={setChecked} />
      </Box>
    </Box>
  );
}

export default TermsOfUseContainer;
