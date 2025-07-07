# COPILOT INSTRUCTIONS FOR REACT-TYPESCRIPT FRONTEND

## PRIME DIRECTIVE

- Avoid working on more than one file at a time to prevent conflicts and corruption
- Maintain clear communication about changes being made
- Explain architecture decisions and best practices while coding
- Follow React and TypeScript best practices with proper type definitions
- Prioritize clean, maintainable, and accessible code

## LARGE FILE & COMPLEX CHANGE PROTOCOL

### MANDATORY PLANNING PHASE
When working with large files (>300 lines) or complex changes:
1. ALWAYS start by creating a detailed plan BEFORE making any edits
2. Your plan MUST include:
   - All components/functions/sections that need modification
   - The order in which changes should be applied
   - Dependencies between changes
   - Estimated number of separate edits required

3. Format your plan as:
```
## PROPOSED EDIT PLAN
Working with: [filename]
Total planned edits: [number]

### Edit sequence:
1. [First specific change] - Purpose: [why]
2. [Second specific change] - Purpose: [why]
3. Do you approve this plan? I'll proceed with Edit [number] after your confirmation.
```

### EXECUTION PHASE
- After each individual edit, clearly indicate progress:
  "✅ Completed edit [#] of [total]. Ready for next edit?"
- If discovering additional needed changes during editing:
  - STOP and update the plan
  - Get approval before continuing

### REFACTORING GUIDANCE
When refactoring large components:
- Break work into logical, independently functional chunks
- Ensure each intermediate state maintains functionality
- Consider temporary duplication as a valid interim step
- Always indicate the refactoring pattern being applied
- Move complex logic to custom hooks when appropriate

## TECHNOLOGY STACK SPECIFICATIONS

### React
- **Target Version**: React 18.x/19.x
- **React Patterns**:
  - Use functional components with hooks
  - Implement proper React.memo usage for performance
  - Apply proper keys for list rendering
  - Follow unidirectional data flow
  - Use context API for global state when appropriate
  - Prefer composition over inheritance
  - Create reusable components with clear responsibilities
  - Implement proper error boundaries
  - Use React.lazy for code splitting
  - Follow the React concurrent mode best practices
  - Apply proper cleanup in useEffect
  - Prefer controlled components

### TypeScript Requirements
- **Target Version**: TypeScript 5.0+
- **Features to Use**:
  - Strict type checking (`"strict": true` in tsconfig)
  - Interfaces for component props
  - Type guards for runtime checks
  - Utility types (Pick, Omit, Partial, etc.)
  - Generics for reusable components
  - Enum for constants and types with fixed values
  - Discriminated unions for state handling
  - Properly typed event handlers
  - Module augmentation when needed
- **TypeScript Style**:
  - Use type inference where obvious
  - Explicit return types on exported functions
  - Use readonly modifier when applicable
  - Prefer interfaces for public APIs, types for internal
  - Use consistent naming conventions (PascalCase for types, camelCase for variables)
  - Type component props with `interface` or `type`

### JavaScript Best Practices
- Use modern ES6+ features (destructuring, spread, optional chaining)
- Apply proper async/await patterns
- Immutable data patterns for state management
- Avoid excessive nesting with early returns
- Use proper error handling with try/catch
- Apply functional programming concepts where appropriate
- Avoid direct DOM manipulation

### HTML & Accessibility
- Semantic HTML5 elements
- Proper heading hierarchy (h1-h6)
- Use appropriate ARIA attributes when needed
- Implement keyboard navigation
- Ensure proper focus management
- Apply appropriate alt text for images
- Use proper form labels and input associations
- Ensure color contrast meets WCAG standards
- Test with screen readers
- Implement proper tab order

### CSS/Styling
- **Methodology**: Follow a consistent CSS methodology (BEM, SMACSS, etc.)
- **Responsive Design**: Mobile-first approach
- **Flexbox/Grid**: Proper usage for layouts
- **Variables**: Use CSS custom properties
- **Performance**: Optimize selectors and avoid expensive properties
- **Animation**: Use hardware-accelerated properties
- **Frameworks**: If using Tailwind/Bootstrap, follow their conventions
- **Dark Mode**: Implement proper theming support
- **Avoid**: !important, inline styles, deep nesting

## PROJECT STRUCTURE

```
frontend/
├── public/               # Static assets
│   ├── favicon.ico
│   ├── index.html
│   └── assets/           # Other static assets
├── src/                  # Application source code
│   ├── assets/           # Local static assets (images, fonts)
│   ├── components/       # Reusable components
│   │   ├── ui/           # UI components (buttons, inputs, etc.)
│   │   ├── layout/       # Layout components
│   │   └── common/       # Common business components
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page components
│   ├── features/         # Feature-based modules
│   │   ├── auth/         # Authentication feature
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   ├── types/
│   │   │   └── index.ts  # Feature exports
│   ├── services/         # API services
│   │   ├── api/          # API client setup
│   │   └── [resource]/   # Resource-specific API calls
│   ├── store/            # State management
│   │   ├── slices/       # Redux slices or context providers
│   │   └── index.ts      # Store configuration
│   ├── types/            # TypeScript type definitions
│   │   ├── common.ts     # Common types
│   │   └── api.ts        # API response/request types
│   ├── utils/            # Utility functions
│   │   ├── formatting.ts # Formatting helpers
│   │   ├── validation.ts # Validation helpers
│   │   └── testing.ts    # Test utilities
│   ├── config/           # App configuration
│   │   ├── routes.tsx    # Route definitions
│   │   └── constants.ts  # Application constants
│   ├── styles/           # Global styles
│   │   ├── global.css    # Global CSS
│   │   ├── variables.css # CSS variables
│   │   └── themes.css    # Theme definitions
│   ├── App.tsx           # Main App component
│   ├── main.tsx          # Application entry point
│   └── vite-env.d.ts     # Vite environment definitions
├── tests/                # Test files
│   ├── unit/             # Unit tests
│   ├── integration/      # Integration tests
│   ├── e2e/              # End-to-end tests
│   └── fixtures/         # Test data
├── .eslintrc.js          # ESLint configuration
├── .prettierrc           # Prettier configuration
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md             # Project documentation
```

## CODE ORGANIZATION PRINCIPLES

### Components
- **Single Responsibility**: Each component should have a single responsibility
- **Props Interface**: Define props interface for each component
- **Default Props**: Provide sensible defaults when applicable
- **Composition**: Favor composition over complex props
- **Prop Drilling**: Avoid excessive prop drilling (use context or state management)
- **Testing**: Design components to be easily testable

### Hooks
- **Custom Hooks**: Extract reusable logic into custom hooks
- **Dependencies**: Always specify dependencies array in useEffect/useCallback/useMemo
- **Side Effects**: Contain side effects in useEffect
- **Cleanup**: Implement proper cleanup in useEffect returns
- **State Management**: Use useState for local state, useReducer for complex state

### State Management
- **Local vs. Global**: Use local state for component-specific data
- **Context API**: Use for theme, auth, and other app-wide state
- **Redux/Zustand**: Consider for complex application state
- **Data Fetching**: Use react-query/SWR for server state
- **Immutability**: Always maintain immutability with state updates

## COMPONENT DESIGN PATTERNS

### Presentational Components
- Focus on UI rendering
- Receive data and callbacks via props
- No direct connection to data sources
- Easily testable in isolation

Example:
```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false
}) => (
  <button
    className={`btn btn-${variant}`}
    onClick={onClick}
    disabled={disabled}
    type="button"
  >
    {label}
  </button>
);
```

### Container Components
- Connect to data sources
- Handle data fetching and state management
- Pass data down to presentational components
- Focus on "how things work"

Example:
```tsx
const UserListContainer: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await userService.getUsers();
        setUsers(response.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return <UserList users={users} />;
};
```

### Compound Components
- Share state implicitly through context
- Provide flexible composition
- Allow for customizable UI arrangement

Example:
```tsx
// Tab component
const TabContext = createContext<TabContextValue | undefined>(undefined);

const Tabs: React.FC<TabsProps> & {
  Panel: React.FC<TabPanelProps>;
  Button: React.FC<TabButtonProps>;
} = ({ children, defaultTab, onChange }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  return (
    <TabContext.Provider value={{ activeTab, onChange: handleTabChange }}>
      <div className="tabs-container">{children}</div>
    </TabContext.Provider>
  );
};

Tabs.Button = ({ children, tabId }) => {
  const { activeTab, onChange } = useContext(TabContext)!;
  return (
    <button
      className={`tab-btn ${activeTab === tabId ? 'active' : ''}`}
      onClick={() => onChange(tabId)}
    >
      {children}
    </button>
  );
};

Tabs.Panel = ({ children, tabId }) => {
  const { activeTab } = useContext(TabContext)!;
  
  if (activeTab !== tabId) return null;
  return <div className="tab-panel">{children}</div>;
};
```

### Custom Hooks
- Extract and reuse complex logic
- Follow the "use" naming convention
- Return values, not JSX

Example:
```tsx
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
```

## CODING STANDARDS

### Naming Conventions
- **Files**: Use PascalCase for component files: `Button.tsx`
- **Components**: Use PascalCase: `UserProfile`
- **Hooks**: Use camelCase with "use" prefix: `useAuth`
- **Interfaces/Types**: Use PascalCase with descriptive names: `UserProfileProps`
- **Functions/Methods**: Use camelCase with descriptive names: `handleSubmit`
- **Variables**: Use camelCase with descriptive names: `userProfile`
- **Constants**: Use UPPER_SNAKE_CASE: `MAX_ITEMS_PER_PAGE`
- **Enums**: Use PascalCase for name, PascalCase for values: `enum Theme { Light, Dark }`
- **CSS Classes**: Use kebab-case: `user-profile`

### Code Formatting
- Use Prettier for consistent formatting
- Indent using 2 spaces
- Maximum line length of 100 characters
- Use trailing commas in multi-line objects/arrays
- Use semicolons at the end of statements
- Use single quotes for strings
- Consistent import ordering (external modules first, then internal)

### Component Structure
- Props interface/type at the top
- Destructure props in function signature
- Initialize state and hooks at the beginning
- Define event handlers and helper functions
- Return JSX at the end
- Export as default for page components, named exports for reusable components

Example component structure:
```tsx
interface UserCardProps {
  user: User;
  onEdit?: (id: string) => void;
  isSelected?: boolean;
}

export const UserCard: React.FC<UserCardProps> = ({
  user,
  onEdit,
  isSelected = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleExpand = () => {
    setIsExpanded(prev => !prev);
  };
  
  const handleEditClick = () => {
    if (onEdit) {
      onEdit(user.id);
    }
  };
  
  return (
    <div className={`user-card ${isSelected ? 'selected' : ''}`}>
      <h3>{user.name}</h3>
      <button onClick={handleExpand}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      {isExpanded && (
        <div className="user-details">
          <p>Email: {user.email}</p>
          {onEdit && (
            <button onClick={handleEditClick}>Edit</button>
          )}
        </div>
      )}
    </div>
  );
};
```

### Type Definitions
- Define shared types in dedicated files
- Use type inference where obvious
- Explicitly type function parameters and returns
- Create utility types for common patterns
- Type event handlers properly

Example types:
```tsx
// types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
}

export enum UserRole {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  Viewer = 'VIEWER',
}

export type UserCreateInput = Omit<User, 'id' | 'createdAt'>;
export type UserUpdateInput = Partial<UserCreateInput>;

// Event handler types
type ChangeEventHandler = React.ChangeEvent<HTMLInputElement>;
type FormSubmitHandler = React.FormEvent<HTMLFormElement>;
```

## PERFORMANCE OPTIMIZATION

### Component Optimization
- Use React.memo for expensive render components
- Implement useCallback for handlers passed as props
- Apply useMemo for expensive calculations
- Virtual scrolling for long lists (react-window, react-virtualized)
- Avoid anonymous functions in render methods
- Throttle/debounce event handlers for frequent events

### Code Splitting
- Use React.lazy for component-level code splitting
- Implement dynamic imports for routes
- Prefetch critical routes
- Bundle analysis to identify large dependencies

Example code splitting:
```tsx
const LazyUserDashboard = React.lazy(() => import('./pages/UserDashboard'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/dashboard" element={<LazyUserDashboard />} />
        {/* Other routes */}
      </Routes>
    </Suspense>
  );
}
```

### Rendering Optimization
- Avoid unnecessary re-renders
- Use proper key props for lists
- Keep component state as local as possible
- Memoize expensive components with React.memo
- Use CSS transitions instead of JS animations when possible

### Image Optimization
- Use appropriate image formats (WebP, AVIF)
- Implement responsive images with srcset
- Lazy load images with loading="lazy"
- Optimize and compress images
- Use modern image components (Next Image, etc.)

## SECURITY BEST PRACTICES

- Prevent XSS attacks with proper content sanitization
- Avoid unsafe React patterns (dangerouslySetInnerHTML)
- Implement proper Content Security Policy
- Use HTTPS for all API calls
- Sanitize user inputs before processing
- Protect sensitive data and credentials
- Implement security headers
- Use environment variables for API keys
- Follow OWASP security recommendations

## ACCESSIBILITY STANDARDS

- Use semantic HTML elements
- Implement proper heading hierarchy
- Add appropriate ARIA attributes
- Ensure keyboard navigation works
- Maintain focus management for modals/popups
- Support screen readers
- Test with accessibility tools (Axe, Lighthouse)
- Meet WCAG 2.1 AA standards
- Implement proper form labels and validation
- Ensure sufficient color contrast

Example of accessible form element:
```tsx
const AccessibleForm: React.FC = () => {
  return (
    <form aria-labelledby="form-title">
      <h2 id="form-title">Registration Form</h2>
      
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input 
          id="name"
          type="text"
          aria-required="true"
          aria-describedby="name-error"
        />
        <div id="name-error" aria-live="polite" className="error-message">
          {/* Error message appears here */}
        </div>
      </div>
      
      <button 
        type="submit"
        aria-busy={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};
```

## TESTING STANDARDS

### Unit Tests
- Test components in isolation
- Mock external dependencies
- Use React Testing Library for component tests
- Focus on user interaction, not implementation details
- Test common use cases and edge cases

Example component test:
```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with the correct label', () => {
    render(<Button label="Click me" onClick={jest.fn()} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('is disabled when disabled prop is true', () => {
    render(<Button label="Click me" onClick={jest.fn()} disabled />);
    expect(screen.getByText('Click me')).toBeDisabled();
  });
});
```

### Integration Tests
- Test component interaction
- Verify routing and state management
- Test form submissions
- Mock API responses

### E2E Tests
- Use Cypress or Playwright
- Test critical user flows
- Verify application behavior in production-like environment
- Test across different browsers

### Test Organization
- Mirror source directory structure in tests
- Use descriptive test names
- Group related tests with describe blocks
- Use before/after hooks for setup/teardown

### Testing Patterns
- Arrange-Act-Assert pattern
- Given-When-Then for behavior tests
- Use factory functions for test data

## API INTEGRATION

### API Client
- Create a centralized API client (Axios, Fetch)
- Implement request/response interceptors
- Handle global error management
- Set up authentication headers
- Configure request timeouts
- Implement retry logic

Example API client:
```tsx
// services/api/client.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const baseConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const apiClient: AxiosInstance = axios.create(baseConfig);

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    
    // Handle specific error codes
    if (response && response.status === 401) {
      // Handle unauthorized
      localStorage.removeItem('auth_token');
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;
```

### Data Fetching
- Implement proper loading states
- Handle errors gracefully
- Use react-query/SWR for data fetching
- Implement optimistic updates
- Cache responses when appropriate

Example with react-query:
```tsx
// hooks/useUsers.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { User, UserCreateInput } from '../types/user';
import * as userService from '../services/userService';

export function useUsers() {
  const queryClient = useQueryClient();
  
  const usersQuery = useQuery<User[]>(['users'], () => 
    userService.getUsers().then(res => res.data)
  );
  
  const createUserMutation = useMutation(
    (newUser: UserCreateInput) => userService.createUser(newUser),
    {
      onSuccess: () => {
        // Invalidate cache and refetch
        queryClient.invalidateQueries(['users']);
      },
    }
  );
  
  return {
    users: usersQuery.data || [],
    isLoading: usersQuery.isLoading,
    error: usersQuery.error,
    createUser: createUserMutation.mutate,
    isCreating: createUserMutation.isLoading,
  };
}
```

## ROUTING BEST PRACTICES

- Implement route-based code splitting
- Use lazy loading for route components
- Secure routes with authentication guards
- Handle 404 pages gracefully
- Implement route transitions
- Maintain proper route organization
- Use route parameters and query params appropriately

Example router setup (React Router):
```tsx
// config/routes.tsx
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Spinner } from '../components/ui/Spinner';
import { ProtectedRoute } from '../components/common/ProtectedRoute';
import { MainLayout } from '../layouts/MainLayout';

// Lazy-loaded components
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const UserProfile = lazy(() => import('../pages/UserProfile'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile/:userId" element={<UserProfile />} />
          </Route>
        </Route>
        
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
```

## FORM HANDLING

- Use form libraries for complex forms (Formik, react-hook-form)
- Implement proper validation (Yup, Zod)
- Provide clear error messages
- Use controlled components
- Handle form submission asynchronously
- Implement proper field focus and tabbing
- Add proper loading states during submission

Example with react-hook-form:
```tsx
// components/UserForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { User } from '../types/user';

const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  role: z.enum(['ADMIN', 'EDITOR', 'VIEWER']),
});

type UserFormData = z.infer<typeof userSchema>;

interface UserFormProps {
  defaultValues?: Partial<UserFormData>;
  onSubmit: (data: UserFormData) => Promise<void>;
  isSubmitting?: boolean;
}

export const UserForm: React.FC<UserFormProps> = ({
  defaultValues = {},
  onSubmit,
  isSubmitting = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues,
  });
  
  const onSubmitHandler = async (data: UserFormData) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input id="name" {...register('name')} />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register('email')} />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
      
      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select id="role" {...register('role')}>
          <option value="ADMIN">Admin</option>
          <option value="EDITOR">Editor</option>
          <option value="VIEWER">Viewer</option>
        </select>
        {errors.role && <p className="error">{errors.role.message}</p>}
      </div>
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};
```

## RESPONSIVE DESIGN

- Implement mobile-first approach
- Use responsive units (rem, em, vh/vw, %)
- Apply CSS media queries strategically
- Test on multiple screen sizes
- Use Flexbox/Grid for layouts
- Implement proper touch targets for mobile
- Ensure proper font sizes for readability
- Optimize images for different screen sizes

Example responsive component:
```tsx
// components/ui/Card.tsx
import styles from './Card.module.css';

interface CardProps {
  title: string;
  content: string;
  imageUrl?: string;
}

export const Card: React.FC<CardProps> = ({ title, content, imageUrl }) => {
  return (
    <div className={styles.card}>
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title} 
          className={styles.cardImage}
          loading="lazy"
        />
      )}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardText}>{content}</p>
      </div>
    </div>
  );
};
```

```css
/* Card.module.css */
.card {
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: var(--color-card-bg);
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-4px);
}

.cardImage {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.cardContent {
  padding: 1rem;
}

.cardTitle {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--color-text-primary);
}

.cardText {
  font-size: 1rem;
  color: var(--color-text-secondary);
}

@media (min-width: 768px) {
  .card {
    flex-direction: row;
    max-height: 220px;
  }
  
  .cardImage {
    width: 40%;
    height: 100%;
  }
  
  .cardContent {
    width: 60%;
    padding: 1.5rem;
  }
  
  .cardTitle {
    font-size: 1.5rem;
  }
}
```

## DOCUMENTATION AND COMMENTING

- Use JSDoc for documenting components and functions
- Add comments for complex logic
- Create storybook documentation for UI components
- Include usage examples
- Document props and state
- Use type definitions as documentation

Example JSDoc:
```tsx
/**
 * Button component for primary user actions.
 * 
 * @param {ButtonProps} props - The component props
 * @param {string} props.label - The button text
 * @param {() => void} props.onClick - Click event handler
 * @param {'primary' | 'secondary'} [props.variant='primary'] - Visual style variant
 * @param {boolean} [props.disabled=false] - Whether the button is disabled
 * @returns {JSX.Element} The rendered Button component
 * 
 * @example
 * <Button 
 *   label="Submit" 
 *   onClick={handleSubmit} 
 *   variant="primary" 
 * />
 */
export const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  variant = 'primary', 
  disabled = false 
}) => {
  // Component implementation
};
```

## DEPENDENCY MANAGEMENT

- Keep dependencies updated
- Use package.json scripts for common tasks
- Minimize production dependencies
- Use peer dependencies appropriately
- Audit dependencies for security vulnerabilities
- Consider bundle size when adding dependencies

## INTERNATIONALIZATION

- Use i18n libraries (react-intl, i18next)
- Extract all user-facing strings
- Support right-to-left languages
- Implement locale switching
- Handle pluralization and formatting

Example i18n setup:
```tsx
// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
```

```tsx
// Usage
import { useTranslation } from 'react-i18next';

const WelcomeMessage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('welcome.title')}</h1>
      <p>{t('welcome.description')}</p>
      <button>{t('welcome.getStarted')}</button>
    </div>
  );
};
```

## ENVIRONMENT & CONFIGURATION

- Use environment variables for different environments
- Type environment variables
- Validate environment variables at build time
- Provide sensible defaults for non-critical values
- Keep sensitive information in environment variables

Example typed environment configuration:
```tsx
// src/config/env.ts
import { z } from 'zod';

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_AUTH_DOMAIN: z.string(),
  VITE_PUBLIC_KEY: z.string(),
  VITE_ENVIRONMENT: z.enum(['development', 'test', 'production']).default('development'),
  VITE_FEATURE_FLAGS: z.string().transform(val => {
    try {
      return JSON.parse(val);
    } catch {
      return {};
    }
  }),
});

// Parse environment variables with fallbacks
const env = {
  API_URL: import.meta.env.VITE_API_URL,
  AUTH_DOMAIN: import.meta.env.VITE_AUTH_DOMAIN,
  PUBLIC_KEY: import.meta.env.VITE_PUBLIC_KEY,
  ENVIRONMENT: import.meta.env.VITE_ENVIRONMENT || 'development',
  FEATURE_FLAGS: (() => {
    try {
      return JSON.parse(import.meta.env.VITE_FEATURE_FLAGS || '{}');
    } catch {
      return {};
    }
  })(),
};

// Validate environment variables
try {
  envSchema.parse(import.meta.env);
} catch (error) {
  console.error('Environment validation failed:', error);
}

export default env;
```

## ERROR HANDLING

- Implement proper error boundaries
- Provide meaningful error messages
- Log errors with appropriate context
- Handle expected error cases gracefully
- Implement fallback UI for failed components
- Use consistent error patterns

Example error boundary:
```tsx
// components/common/ErrorBoundary.tsx
import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  fallback?: ReactNode;
  children: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    
    // Call onError callback if provided
    this.props.onError?.(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return this.props.fallback || (
        <div className="error-container">
          <h2>Something went wrong</h2>
          <p>Please try again later or contact support if the problem persists.</p>
          <button onClick={() => this.setState({ hasError: false, error: null })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

## DEPLOYMENT CONSIDERATIONS

- Configure proper build settings
- Implement CI/CD workflows
- Optimize asset loading
- Implement proper caching strategies
- Configure proper HTTP headers
- Use environment-specific configurations
- Implement proper monitoring and error tracking
- Use CDN for static assets

## CONTINUOUS IMPROVEMENT

- Regular code reviews
- Performance audits
- Accessibility testing
- User feedback integration
- Update dependencies regularly
- Follow React and TypeScript release notes for new features
- Refactor and improve code quality continuously