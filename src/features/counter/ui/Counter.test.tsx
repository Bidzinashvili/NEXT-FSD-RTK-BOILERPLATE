import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Counter } from './Counter';
import counterReducer from 'features/counter/model/counterSlice';

const renderWithStore = (
  component: React.ReactElement,
  { initialState = { counter: { value: 0 } } } = {}
) => {
  const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
    preloadedState: initialState,
  });

  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('Counter', () => {
  it('renders counter with initial value', () => {
    renderWithStore(<Counter />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('increments counter when + button is clicked', async () => {
    const user = userEvent.setup();
    renderWithStore(<Counter />);

    const incrementButton = screen.getByRole('button', { name: '+' });
    await user.click(incrementButton);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('decrements counter when - button is clicked', async () => {
    const user = userEvent.setup();
    renderWithStore(<Counter />);

    const decrementButton = screen.getByRole('button', { name: '-' });
    await user.click(decrementButton);

    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  it('resets counter when Reset button is clicked', async () => {
    const user = userEvent.setup();
    const { store } = renderWithStore(<Counter />, {
      initialState: { counter: { value: 5 } },
    });

    expect(screen.getByText('5')).toBeInTheDocument();

    const resetButton = screen.getByRole('button', { name: /reset/i });
    await user.click(resetButton);

    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('handles multiple increment clicks', async () => {
    const user = userEvent.setup();
    renderWithStore(<Counter />);

    const incrementButton = screen.getByRole('button', { name: '+' });
    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(incrementButton);

    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('renders counter title', () => {
    renderWithStore(<Counter />);
    expect(screen.getByText('Counter Feature')).toBeInTheDocument();
  });
});
