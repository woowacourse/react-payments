## memo

1. errorStatus 자체를 page에서 관리해야 할까
    - 그러기 싫다!
    - 페이지가 알아야 하는 건 결국 step을 계산하기 위한 "에러 여부"
    - "어떤 에러"인지는 관심사가 x라고 생각
    - 근데 과연 하나의 error에 대해 page단에서는 error 여부/ field 단에서는 status를 각각 관리하는 게 맞나?
2. step을 파생값으로 다루면... -> validity에 따라 화면이 너무 번쩍거릴듯
    - 첫! validate 통과 시에만 step을 다음으로 넘길 수 없을까
3. onChange, onBlur에서의 검증 로직을 어떻게 추상화할수있을까
4. 다중 인풋 에러 핸들링
5. '숫자만 입력 가능합니다' 에러 메시지 제거
    - 왜? error를 배열로 관리 -> 앞선 에러만 표기 -> 이미 앞에서 에러가 발생했을 때 뒤 입력에서의 숫자 외 입력은 에러 메시지가 안 뜸 -> 일관성 x (미해결)
    - 숫자 외 입력에 대해서는 또 예외적으로 처리해야 하는데 이게 필요한 비용인가? x 아니라고 생각함 (해결)
    - 추가 이슈) 숫자 길이 맞게 입력한 뒤 숫자 외 입력 -> 에러 상태로 표시됨 -> but 실제로는 숫자 외 입력이 필터링됐기 때문에 valid라고 판단해야 함 -> 이런 케이스도 처리 필요
    - => 숫자 외 입력에 대한 예외처리 불필요해짐 (sanitize)
6. 정규식으로 value 필터링 vs 애초에 change에서 원천차단(early return)
    - 정규식으로 sanitize하는 방식이 더 나을 듯
    - 언제는 return하고 언제는 update하는 것보다 항상 sanitize된 값으로 update하는 방식이 더 흐름 읽기 좋음
    - 근데 이게 판단 기준이 되어도 되는 건지는 잘 모르겠음
7. 어떤 경우에 numberOnly고, 어떤 경우에 required인지까지 그 검증 로직까지 하나로 묶어서 추출할 수 있을까
    - type 속성을 기준으로 필터링
8. M/Y 검증이 입력 즉시 필요할지 blur 시에 하면 될지
    - 현재 블러 검증: required, length -> 에러를 띄울 때 입력이 완료됨을 판단할 수 없음
    - M/Y 검증: 2자를 모두 채우면 입력이 완료됐다고 판단 가능 -> 바로 에러처리해주는 편이 자연스럽다고 생각
9. bottom 고정된 button -> button 컴포넌트의 variant로 이 정보까지 받아야 할까
10. rounded size를 따로 받아야 할까 합칠 순 없을까
11. 숫자 외 입력에 대한 피드백을 줘야 할까?
    - 주면 장점: 사용자한테 조금 더 친절함
    - 안 주면 장점: 에러를 파생값으로 관리할 수 있음 (상태 관리 복잡도 낮아짐)
    - 주면 단점: 이미 max length인 input에 대해 에러가 뜨는 문제 다시 발생함
    - 안 주면 단점: 사용자한테 조금 더 불친절

---

- 상태 최소화와 파생값(Derived Value) 적극 활용한다.

- 커스텀 훅은 상태 자체가 아닌 상태를 다루는 '로직(유효성 검사, 포커스 이동)'을 공유하기 위해 사용한다.

- 판단의 기준, 근거를 명확히 한다.

---

0. input error 관련 버그 외에도 기타 1단계 pr 피드백 반영

0. 지금 드는 설계적인 고민 정리

0. 현재 존재하는 input error 관련 버그를 수정한다

5. input 포커싱 등 공통 로직을 훅으로 분리한다
   5-1. 이때 훅 안에서 고립된 상태를 만들지 않고, 부모로부터 전달받은 상태와 핸들러를 조작하는 순수 '기능 로직'의 역할만 하도록 구성한다.
    - 우선 setter 호출을 1회로 정리하는 것부터
    - 함수 내부 if문 분기 방식 -> validates 구조 도입해 단순화

   a. useErrorStatusList 훅과 useErrorStatus 훅을 구현?
    - validates를 받아서 errorStatusList/errorStatus, handleChange, handleBlur를 반환하는 훅
    - status state 관련 내부 로직을 캡슐화하면서 + 공통 로직 묶을 수 있음
    - index 등 optional 파라미터 관련 타입 안정성 + 확장성 확보 필요함

   b. 다른 방법 있나

3. field별 validate를 기반으로 step을 관리한다
   3-1. step은 state로 관리한다.
    - 이전 step의 error 상태에 따라 다음 ui가 깜빡거리는 문제
    - 모든 input이 꽉차고, valid하고, step이 현재 step인 경우에만 다음 스텝으로 설정
      -> errorStatus 및 value 기반 state로 관리해야 함
    - 대신 이전 field가 다시 invalid해졌을 때 그 다음 field input들을 disable 처리 하는 방향

4. step에 따라 점진적으로 나타나는 플로우를 구축한다

---

1. 추가 input 및 button 컴포넌트를 구현한다

2. button disabled 로직을 구현한다
   -> 가능하다면 첫 validate 시 렌더링, 다시 invlid해지면 돔에서 제거 대신 disabled
   2-1. 파생값으로써 disabled를 관리한다.

6. complete 페이지를 구현한다

7. 라우팅을 연결한다
   7-1. 이동하는 경로(/complete 등)는 문자열 하드코딩을 피하고 const ROUTE = { ... } 형태로 상수화하여 불러다 쓴다.
   7-2. 라우터의 state 기능 등을 활용해 꼭 필요한 정보(카드사, 카드번호 앞자리 등)만 다음 페이지로 넘겨준다.
