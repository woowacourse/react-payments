import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const App = () => {
  return <div>test</div>;
};

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<App />);

  // ACT

  // ASSERT
  expect(await screen.getByText(/test/)).toBeInTheDocument();
});
