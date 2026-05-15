## 기능 요구 사항

1. 카드 리스트 페이지 퍼블리싱

- [ ] layout
    - [ ] header
- [ ] success
    - [ ] card item
        - [ ] 카드사, 카드번호, 유효기간, issuer
        - [ ] 삭제 버튼
    - [ ] 버튼 variant - solid/outlined(dashed?)
    - [ ] 버튼 icon 추가? or children으로
- [ ] loading
    - [ ] 스켈레톤 컴포넌트?
- [ ] empty
    - [ ] 카드 추가 버튼
- [ ] error
    - [ ] 다시 시도 버튼

2. MSW 구현

- [API 명세](https://techcourse.woowahan.com/s/qEVMUHgA/ls/CBRwhuw6)

```markdown
Method Path 설명 성공 status
POST /cards 카드 등록 201
GET /cards 카드 목록 조회 200
DELETE /cards/:id 카드 삭제 204 
```

3. API 요청 처리

- [ ] 카드 등록 (서버 연동)
    - 등록 버튼 클릭 시 POST /cards로 카드 정보를 전송한다.
    - 201 응답 수신 시 카드 목록 페이지(/cards)로 이동한다.
    - 서버가 400 { code, message }를 반환하면 code를 해당 입력 필드로 매핑하여 그 필드 아래에 메시지를 표시한다.

- [ ] 카드 목록 (/cards)
    - 페이지 진입 시 GET /cards로 등록된 카드 목록을 조회한다.
    - 비동기 상태(idle | loading | success | error)에 맞는 UI를 표시한다.
        - loading: 스피너 또는 스켈레톤
        - success + 목록이 비어 있음: "등록된 카드가 없습니다" 안내
        - success + 목록이 있음: 카드 프리뷰 리스트
        - error: 에러 메시지와 재시도 버튼

- [ ] 카드 삭제
    - 각 카드에 삭제 버튼을 제공한다.
    - 삭제 버튼 클릭 시 window.confirm()으로 확인을 받고, 사용자가 확인한 경우에만 삭제를 진행한다.
    - 확인 시 DELETE /cards/:id로 요청하고 목록을 갱신한다. 취소 시 아무 요청도 보내지 않는다.
