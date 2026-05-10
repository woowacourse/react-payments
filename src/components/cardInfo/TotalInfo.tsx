import ConditionalCardBrand from "../conditional/ConditionalCardBrand";
import ConditionalCvc from "../conditional/ConditionalCvc";
import ConditionalExpireDate from "../conditional/ConditionalExpireDate";
import ConditionalPassword from "../conditional/ConditionalPassword";
import ConditionalSendButton from "../conditional/ConditionalSendButton";
import CardNumber from "./cardNumber/CardNumber";

export default function TotalInfo() {
  return (
    <>
      <CardNumber>
        <ConditionalCardBrand>
          <ConditionalExpireDate>
            <ConditionalCvc>
              <ConditionalPassword>
                <ConditionalSendButton />
              </ConditionalPassword>
            </ConditionalCvc>
          </ConditionalExpireDate>
        </ConditionalCardBrand>
      </CardNumber>
      {/* <ConditionalPassword />
      <ConditionalCvc />
      <ConditionalExpireDate />
      <ConditionalCardBrand />
      <CardNumber /> */}
    </>
  );
}
