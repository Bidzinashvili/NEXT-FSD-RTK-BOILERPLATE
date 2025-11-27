# FSD Next.js Boilerplate

A production-ready Next.js boilerplate using Feature-Sliced Design (FSD) architecture with Redux Toolkit, RTK Query, and SCSS Modules.

## 🏗️ Architecture

This project follows **Feature-Sliced Design (FSD)** methodology:

```
src/
├── app/                    # Next.js App Router
│   ├── providers/         # App-level providers (Redux store, etc.)
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── shared/                # Shared utilities, UI components, and configs
│   ├── api/              # Base API configuration (RTK Query)
│   ├── ui/               # Reusable UI components
│   ├── lib/              # Utility functions
│   └── config/           # App configuration
├── entities/             # Business entities
│   └── user/            # User entity with API and UI
├── features/            # User features/interactions
│   └── counter/         # Counter feature with Redux slice
├── widgets/             # Composite blocks (sections of pages)
│   └── user-list/       # User list widget
└── processes/           # Complex cross-feature scenarios
```

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Redux Toolkit** - State management
- **RTK Query** - Data fetching and caching
- **SCSS Modules** - Component-scoped styling
- **Jest & React Testing Library** - Testing
- **ESLint & Prettier** - Code quality and formatting
- **Zod** - Runtime validation
- **Feature-Sliced Design** - Architecture methodology

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Testing

```bash
npm test                # Run tests
npm run test:watch      # Watch mode
npm run test:coverage   # Coverage report
```

## 📝 Code Quality

```bash
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint errors
npm run format          # Format with Prettier
npm run format:check    # Check formatting
```

## 🏗️ Build

```bash
npm run build
npm start
```

## 📁 Project Structure Details

### `/app` - Application Layer
- Next.js routes and pages
- Root layout with providers
- Global styles

### `/shared` - Shared Resources
- **ui/**: Reusable UI components (Button, Card, etc.)
- **api/**: RTK Query base API setup
- **lib/**: Utility functions
- **config/**: Application configuration

### `/entities` - Business Entities
- Domain-specific data models
- API endpoints (RTK Query)
- Entity-specific UI components

### `/features` - User Features
- Feature-specific logic (Redux slices)
- Feature UI components
- User interactions and actions

### `/widgets` - Composite Blocks
- Complex UI blocks combining multiple entities/features
- Page sections

### `/processes` - Business Processes
- Multi-step workflows
- Cross-feature scenarios

## 🎯 Key Features

- ✅ Fully typed with TypeScript
- ✅ Redux Toolkit with typed hooks
- ✅ RTK Query for API calls with caching
- ✅ SCSS Modules for styling
- ✅ Absolute imports configured
- ✅ Feature-Sliced Design architecture
- ✅ Jest & React Testing Library setup
- ✅ ESLint & Prettier configured
- ✅ Error boundaries for error handling
- ✅ Loading states with Loader & Skeleton components
- ✅ Environment variable validation with Zod
- ✅ Production-ready structure

## 📝 Example Usage

### Redux Slice (Counter Feature)

```typescript
import { useAppDispatch, useAppSelector } from 'app/providers/store/hooks';
import { increment, decrement, selectCounterValue } from 'features/counter';

const count = useAppSelector(selectCounterValue);
dispatch(increment());
```

### RTK Query (User Entity)

```typescript
import { useGetUsersQuery } from 'entities/user';

const { data: users, isLoading, error } = useGetUsersQuery();
```

## 🔧 Configuration

### Absolute Imports

Configured in `tsconfig.json`:

```json
{
  "paths": {
    "app/*": ["./src/app/*"],
    "shared/*": ["./src/shared/*"],
    "entities/*": ["./src/entities/*"],
    "features/*": ["./src/features/*"],
    "widgets/*": ["./src/widgets/*"],
    "processes/*": ["./src/processes/*"]
  }
}
```

### Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_API_BASE_URL=https://your-api.com
```

## 📚 Learn More

- [Feature-Sliced Design](https://feature-sliced.design/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)

## 📄 License

MIT
