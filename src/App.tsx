import "./style.css";
import "./reset.css";
import Description from "./component/Description";
import Input from "./component/Input";

function App() {
  return (
    <>
      <Description headText="안녕하세요" detailText="디테일" />
      <Input maxLength={4} placeholder="카드번호" isError={false} />
    </>
  );
}

export default App;
