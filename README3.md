# 페이먼츠 3단계 - MSW & Async & Testing

## 사전 인지할 점 (step2 리뷰)
- [x] 조립 순서 정리: 섹션 훅 내부의 원자 훅 조립 순서를 의도가 드러나도록 재배치 (포커스 -> 입력 -> 에러).
- [x] 성공 페이지 라우팅 주의 - 서버 연동 시에도 응답받은 식별자(`id`)와 렌더링에 필요한 안전한 데이터만 성공 페이지로 넘기도록 구조 유지.

## MSW
- [x] POST `/cards` (카드 등록) 핸들러 구현
  - 성공 (201): 서버가 생성한 UUID v4 ( crypto.randomUUID() ) 로 id 반환
  - 실패 (400): 400 { code, message }를 반환하면 code를 해당 입력 필드로 매핑하여 그 필드 아래에 메시지를 표시
    - number, expirationDate, cvc, issuerCode
    - INVALID_CARD_NUMBER, '유효하지 않은 카드 번호입니다.'
    - INVALID_CVC, '유효하지 않은 CVC입니다.'
    - INVALID_EXPIRATION_DATE, '유효하지 않은 만료일입니다.'
    - issuerCode
      - 한글명	issuerCode	영문	카드 색상
        BC카드	   31	BC	red
        신한카드	41	SHINHAN	blue
        카카오뱅크	15	KAKAOBANK	yellow
        현대카드	61	HYUNDAI	black
        우리카드	W1	WOORI	sky
        롯데카드	71	LOTTE	orange
        하나카드	21	HANA	teal
        국민카드	11	KOOKMIN	gray
    - 카드브랜드
      - 프리뷰 로고 표시에만 사용된다. 카드번호가 어떤 브랜드와도 매칭되지 않으면 서버가 등록 시 400 반환
- [x] GET `/cards` (카드 조회) 핸들러 구현
  - 성공 (200): 저장된 카드 목록을 [{'id', 'issuerCode', 'number', 'expirationDate'}] 의 형태로 응답
  - 카드번호는 마스킹 형식(앞 6자리 + ****** + 뒤 4자리)으로 반환.
  - 색상/로고는 클라이언트가 issueCode와 앞 6자리의 숫자를 보고 자체 매핑
- [x] DELETE `/cards/:id` (카드 삭제) 핸들러 구현
  - 성공 (204): 해당 ID의 카드를 삭제하고 No Content, 응답 본문 없음, 존재하지 않는 ID에도 빈 본문 반환 (멱등성 유지를 위해).

## 비동기 상태 관리
- [x] 비동기 상태를 `idle | loading | success | error` 네 가지로 명시적으로 다룬다.
- [x] `isLoading`, `error` 를 별도 boolean으로 분리하지 않는다.

## API 연동 및 UI 구현
- [x] 카드 등록 페이지 (POST 연동)
  - `issuerCode`(발급사), `number`, `expirationDate`, `cvc` 페이로드 전송.
  - 400 에러 수신 시 서버의 `code`를 분석하여 해당 입력 필드 하단에 에러 메시지 매핑 및 표시.
  - 201 성공 시 카드 목록(`/cards`)으로 이동.
- [x] 카드 목록 페이지 (GET 연동 피그마 시안 메인)
  - `loading`: 스피너 혹은 스켈레톤 UI 표시.
  - `success` + 목록이 비어있음: "등록된 카드가 없습니다" "아래 버튼을 눌러 첫 카드를 등록해보세요"UI 표시, 카드 추가하기 큰 버튼 표시
  - `success` + 목록이 있음: `issuerCode`(카드사)와 마스킹된 카드 번호, 유효기간을 활용한 카드 프리뷰 리스트 표시, 점선 박스로 '+ 카드 추가' 버튼 표시, 목록의 개수에 따라 보유 카드 (카드 갯수) 라벨 표시
  - `error`: 에러 아이콘 및 "카드 목록을 불러올 수 없어요, 잠시 후 다시 시도해 주세요." UI 및 다시 시도 큰 버튼 표시.
- [x] 카드 삭제 기능 (DELETE 연동)
  - 각 카드의 삭제 버튼 클릭 시 `window.confirm()`으로 확인.

## 통합 테스트
- [x] MSW와 RTL로 사용자 관점의 통합 테스트 작성 : 카드 등록 -> 목록 조회 -> 카드 삭제.
- [x] 400 에러 발생 시 UI에 에러 메시지가 올바르게 노출되는지 테스트.