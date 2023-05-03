## 기능 요구 사항

- [ ] 스토리북 상호작용 테스트하기
- [x] 버튼 위치 페이지 벗어나지 않게 수정

## 피드백

- [ ] 추상화했을 때, 얻는 이득이 크지 않다면 컴포넌트 내부에 두기. 혹은 재사용성을 높여서 분리하기
- [ ] 제어/비제어 개념에 대해서 집중도 있게 학습하기
- [ ] 컴포넌트 분리의 기준 세우기
- [ ] viewport 메타태그 학습, safe area 학습
- [ ] inputmode라는 속성에 대해 알아보셔도 좋을 것 같아요! 가상키보드가 어떻게 떠야하는지 지정
- [x] 자유도를 좀 더 생각해서 스킵이 가능하게 하되 제출만 막는 경험 구현하기
- [x] src/GlobalStyles.ts
      100vw 에서 100%로 변경한 이유는 어떤 것인가요?
- [x] src/components/BottomSheet/BottomSheet.tsx
      CardCompanyLogoList를 바텀싯이 알아야할것같진 않아서 children정도여도 좋을 것 같아요~
- [ ] src/components/Card/Card.styled.ts
      테마여서 프리셋으로 지정된 문자열으로 예상했는데 컬러값이네요! backgroundColor로 명확하게 변경해줘도 좋을 것 같아요
- [ ] src/components/Card/Card.styled.ts
      Info는 붙어서 어떤 의미가 추가되지 않는 불용어이기 때문에 요기 그냥 Card로 명명해주면 어떨까 싶네요!
- [ ] src/components/Card/Card.tsx
      `card.company.name`
      요렇게 prop명이 네이밍 될수있으면 깔끔할 것 같아요 ㅎㅎ
      상위에서 이미 사용된 중복단어는 생략하는게 좋은것같아요.
      디렉토리명 등등 계층에 관한 이름짓기는 요걸 염두에 두면 명확해져서 좋아요
- [ ] src/components/Card/Card.tsx
      그러면 여기 네이밍이 겹쳐서 애매해질텐데 보통 컴포넌트는 UI의 늬앙스를 이름에 추가하면 더 명확해지는 것 같아요. ex) Section, ListItem 등등 ~~~
- [ ] src/components/CardCompanyButton/CardCompanyButton.tsx
      버튼의 클릭핸들러 콜백을 받으니 onClick을 prop명으로 받으면 어떨까요? setCardCompany는 범위가 많이 작은 것 같아요. 예를 들어서 클릭시 로깅을 할 수도 있구요. 토스트메시지를 띄울수도있구요. set한다는것을 이 컴포넌트가 알아야할 필요가 있어보이진 않아요
- [ ] src/components/CardCompanyButton/CardCompanyButton.tsx
      타입은 파스칼케이스로 통일하면 좋을 것 같아요~!
      타입과 코드의 거리가 멀어보이는데 여기서 선언하면 어떨까요?
- [ ] src/components/CardCompanyLogoList/CardCompanyLogoList.tsx
      이렇게 함수로 분리한 이유는 어떤 것인가요?
- [ ] src/components/CardList/CardList.tsx
      export default 를 사용하면 rename할때 이름이 같이 안바뀌어서 많이 불편하더라구요
- [ ] src/hooks/useNavigationTo.ts
      요거 페이지이동시 히스토리 유지되나요?
- [ ] src/components/CardList/CardList.tsx
      위에도 적긴했는데 jsx단이 분리가돼서 가독성이 좀 떨어지는 것 같아요
- [ ] src/components/CardList/CardList.tsx
      어떤 요소에대한 클릭이벤트핸들러인지 구체적으로 적어주면 좋을 것 같아요
- [ ] src/components/CardList/CardList.tsx
      홈으로 이동하는것같은데 인자로 명시적으로 전달해주면 더 읽기 좋을 것 같아요~
- [ ] src/components/CardList/CardList.tsx
      cardInfo가 여러가지 정보를 가지고 있는 객체인데 요거 html에 유효하지 않은 문자가 들어가면 화면이 깨지지 않을까싶어요. 데이터의 id값 정도만 저장하는게 어떨까요?
- [ ] src/components/CardList/CardList.tsx

  ```tsx
  if (cardList == null) {
      return null
    }

    return <styled.CardList>{generateCardList(cardList)}</styled.CardList>
  };
  ```

  요렇게 분리해보면 어떨까요?

- [ ] src/components/CardNumberInputBox/CardNumberInputBox.tsx
      jsx를 사용하는곳에서 훅함수를 사용은 지양해봐도 좋을 것 같아요. 컴포넌트에서 한 번 호출된 훅함수는 항상 호출되어야합니다. 반면에 jsx는 얼마든지 조건부로 사용할 수 있어요
- [ ] src/hooks/useInputBox.ts
      그보다 요거 훅함수가 아니네요. use prefix를 어떤 이유에서 붙여주셨나요? 왜 리액트에서 훅 이름에 use를 사용하도록 컨벤션으로 정했는지 알아보셔도 좋을 것 같습니다
- [ ] src/hooks/useInputBox.ts
      아아 여기 else if 지옥인가요.. return을 통해 적절히 끊어보면 어떨까요?
- [ ] src/hooks/useInputBox.ts
      그그 이전에 이함수가 존재해야하는 이유가 조금 이해가 어렵네요. 오히려 onChange 함수들을 한 개 함수로 묶음으로써 복잡도가 올라간것같아요
- [ ] src/components/RegisterEntrySection/RegisterEntrySection.tsx
      컨테이너 컴포넌트가 이미 내부에 요소를 갖고있는것같은데 CardRegisterButton으로 명명되는게 자연스러울 것 같아요
- [ ] src/components/RegisterForm/RegisterForm.tsx
      요소타입이 form 이었다면 submit핸들러함수가 여기서 사용되어서 로직이 위계적으로도 적절한 위치에 있었을것같아요
- [ ] src/components/RegisterForm/RegisterForm.styled.ts
      form이 아닌데 form으로 명명됐어요. 현재 브라우저레벨에서 지원해주는 자동완성기능같은것들이 동작하지 않아요
      [https://wainaat.github.io/react-payments](https://wainaat.github.io/react-payments) 참새가 한 거는 자동완성이 잘되더라구요. 참고해봐도 좋을 것 같아요
- [ ] src/components/Header/Header.tsx
      페이지 타이틀과 뒤로가기버튼을 별도 모듈에서 선언하고 있는데 페이지컴포넌트 모듈에서 관리하면 보다 연관깊은코드가 가까이에 있게될것같아요. PageLayout 컴포넌트와같이 페이지 컴포넌트가 공통적으로 사용하는 컴포넌트에 헤더컴포넌트를 포함시켜서 페이지컴포넌트에서 prop으로 넘겨주도록 변경해보면 어떨까요?
- [ ] src/hooks/useTitle.ts
      요런 단순 setState는 커스텀훅으로 분리하지 않아도 복잡도가 큰 차이가 없는 것 같아요
  ```tsx
  export const useTitle = (titleValue: string) => {
    const [title] = useState(titleValue);
    return title;
  };
  ```
  요렇게 해도될것같은데 useEffect에서 하는 이유는 어떤 것인가요?
