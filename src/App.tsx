import styled from '@emotion/styled';
import CardForm from './components/CardForm';

const View = styled.div`
  width: 100%;
  max-width: 376px;
  margin: 0 auto;
  padding: 16px 32px;
`;

function App() {
  return (
    <View>
      <CardForm />
    </View>
  );
}

export default App;
