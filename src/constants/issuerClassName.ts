import type { Issuer } from "../types";

const ISSUER_CLASS_NAME: Record<Issuer, string> = {
  BC카드: "bc",
  신한카드: "shinhan",
  카카오뱅크: "kakaobank",
  현대카드: "hyundai",
  우리카드: "woori",
  롯데카드: "lotte",
  하나카드: "hana",
  국민카드: "kb",
};

export { ISSUER_CLASS_NAME };
