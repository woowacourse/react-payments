import PaymentLabel from "component/PaymentLabel/PaymentLabel";
import Box from "styles/box";
import Text from "styles/text";

function TotalPaymentContainer({ price }: { price: number }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="30px"
      pl="32px"
      pr="32px"
      width="80%"
    >
      <PaymentLabel>결제금액</PaymentLabel>
      <Box display="flex" justifyContent="space-between">
        <Text fontSize="14px" fontWeight="700" color="#333333" underline={true}>
          총 결제금액
        </Text>
        <Text fontSize="14px" fontWeight="700" color="#333333" underline={true}>
          {price} 원
        </Text>
      </Box>
    </Box>
  );
}

export default TotalPaymentContainer;
