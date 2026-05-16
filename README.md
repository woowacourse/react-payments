페이먼츠 미션 - Step3

# 기능 목록

## 1. 카드 등록

- 등록 버튼 클릭 시 카드 정보를 전송한다.
- 정상응답(201) 수신 시 카드 목록 페이지로 이동한다.
- 제출 에러 발생시 에러가 발생한 필드에 수신한 에러 메시지를 표시한다.

## 2. 카드 목록

- 페이지 진입 시 등록된 카드 목록을 조회한다.
- 4가지 상태에 따라 페이지를 다르게 표시한다.
  - loading: 스켈레톤 UI 표시
  - success + 목록이 비어 있음: "등록된 카드가 없습니다" 안내
  - success + 목록이 있음: 카드 프리뷰 리스트
  - error: 에러 메시지와 재시도 버튼

## 3. 카드 삭제

- 삭제 버튼 클릭 시 삭제 여부를 받고, 사용자가 확인한 경우에만 삭제를 진행한다.

# API 명세

## 카드 등록

- Method: POST
- Path: /cards
- Request body

  ```
  {
  "number": "5511123456789012",
  "expirationDate": "12/28",
  "cvc": "123",
  "issuerCode": "31"
  }
  ```

  - number(string): 공백/하이픈 제거된 14~16자리 카드 번호
  - expirationDate(string): 만료기간 MM/YY 포맷
  - cvc(string): 3~4자리 CVC 번호
  - issuerCode(string): 두 자리 발급사 코드

- Response body
  - 성공 시
    - status: 201

    ```
    { "id": "550e8400-e29b-41d4-a716-446655440000" }
    ```

    - id: 서버가 생성한 UUID

  - 실패 시

  ```
  { "code": "INVALID_CARD_NUMBER", "message": "유효하지 않은 카드 번호입니다." }
  ```

  - 에러 케이스
    | code | 트리거 | message |
    |---|---|---|
    | INVALID_CARD_NUMBER | 어떤 BIN과도 매칭되지 않는 number | 유효하지 않은 카드 번호입니다. |
    | INVALID_CVC | cvc가 000 | 유효하지 않은 CVC입니다. |
    | INVALID_EXPIRATION_DATE | expirationDate가 MM/YY 형식이 아니거나 MM이 01~12 범위 밖 (예: 13/28) | 유효하지 않은 만료일입니다. |

## 카드 목록 조회

- Method: GET
- Path: /cards
- Response body
  - 성공 시 - status: 200

    ```

    [
    {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "issuerCode": "31",
    "number": "551112******9012",
    "expirationDate": "12/28"
    }
    ]
    ```

    - id(string): 서버가 생성한 UUID
    - issuerCode(string): 두 자리 발급사 코드
    - number(string): 앞 6자리 + `******` + 뒤 4자리 카드번호
    - expirationDate(string): 만료기간 MM/YY 포맷

## 카드 삭제

- Method: DELETE
- Path: /cards/:id
- Parameters:
  - id(string): 서버가 생성한 UUID
- Response body
  - 성공 시 - status: 204

# 발급사 코드 (8종)

| 한글명     | issuerCode | 영문      | 카드 색상 |
| ---------- | ---------: | --------- | --------- |
| BC카드     |         31 | BC        | red       |
| 신한카드   |         41 | SHINHAN   | blue      |
| 카카오뱅크 |         15 | KAKAOBANK | yellow    |
| 현대카드   |         61 | HYUNDAI   | black     |
| 우리카드   |         W1 | WOORI     | sky       |
| 롯데카드   |         71 | LOTTE     | orange    |
| 하나카드   |         21 | HANA      | teal      |
| 국민카드   |         11 | KOOKMIN   | gray      |

# 카드 브랜드 BIN 식별 (클라이언트 측)

| 브랜드     | 시작 번호                           | 자릿수 |
| ---------- | ----------------------------------- | -----: |
| Visa       | 4                                   |     16 |
| Mastercard | 51~55                               |     16 |
| AMEX       | 34, 37                              |     15 |
| Diners     | 36                                  |     14 |
| UnionPay   | 622126~622925 / 624~626 / 6282~6288 |     16 |
