export const LABEL = {
  NUMBER: "카드 번호",
  DATE: "만료일",
  NAME: "카드 소유자 이름(선택)",
  CODE: "보안 코드(CVC/CVV)",
  PASSWORD: "카드 비밀번호",
} as const;

export const PLACEHOLDER = Object.freeze({
  DATE: ["MM", "YY"],
  NAME: ["카드에 표시된 이름과 동일하게 입력하세요."],
});
