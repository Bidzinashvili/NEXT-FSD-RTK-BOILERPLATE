# Testing Guide

This project uses **Jest** and **React Testing Library** for unit and integration testing.

## Running Tests

```bash
npm test
npm run test:watch
npm run test:coverage
```

## Test Structure

Tests are co-located directly next to the files they test:

```
src/
├── shared/
│   ├── ui/
│   │   └── Button/
│   │       ├── Button.tsx
│   │       ├── Button.test.tsx
│   │       ├── Button.module.scss
│   │       └── index.ts
│   └── lib/
│       ├── utils.ts
│       └── utils.test.ts
├── features/
│   └── counter/
│       ├── model/
│       │   ├── counterSlice.ts
│       │   └── counterSlice.test.ts
│       └── ui/
│           ├── Counter.tsx
│           └── Counter.test.tsx
└── entities/
    └── user/
        └── ui/
            ├── UserCard.tsx
            └── UserCard.test.tsx
```

## Test Examples

### Testing UI Components

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('renders button with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });
});
```

### Testing Redux Slices

```typescript
import { counterReducer, increment, decrement } from '../counterSlice';

describe('counterSlice', () => {
  it('should handle increment', () => {
    const actual = counterReducer({ value: 0 }, increment());
    expect(actual.value).toBe(1);
  });
});
```

### Testing Components with Redux

```typescript
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const renderWithStore = (component, initialState = {}) => {
  const store = configureStore({
    reducer: { counter: counterReducer },
    preloadedState: initialState,
  });

  return render(<Provider store={store}>{component}</Provider>);
};
```

### Testing Utility Functions

```typescript
import { formatDate, cn } from '../utils';

describe('utils', () => {
  it('combines class names', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });
});
```

## Coverage

Current test coverage:

```
Test Suites: 6 passed, 6 total
Tests:       33 passed, 33 total
```

Tests cover:
- ✅ UI Components (Button, Card)
- ✅ Redux Slices (Counter)
- ✅ React Components with Redux (Counter)
- ✅ Entity Components (UserCard)
- ✅ Utility Functions (formatDate, cn)

## Best Practices

1. **Co-locate tests** - Keep tests directly next to the code they test
2. **Use descriptive test names** - Make it clear what's being tested
3. **Test behavior, not implementation** - Focus on what users see/do
4. **Use React Testing Library queries** - Prefer `getByRole`, `getByText` over `getByTestId`
5. **Keep tests simple** - One assertion per test when possible
6. **Mock external dependencies** - Use Jest mocks for API calls

## Configuration

- **jest.config.ts** - Main Jest configuration
- **jest.setup.ts** - Global test setup (imports @testing-library/jest-dom)

The configuration includes:
- Path aliases matching `tsconfig.json`
- SCSS module mocking
- Next.js integration
- Code coverage settings
