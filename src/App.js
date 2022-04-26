import Card from "./components/Card";
import Header from "./components/Header";
const App = () => {
  return (
    <main>
      <Header />
      <Card cardNumber={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]} />
    </main>
  );
};

export default App;
