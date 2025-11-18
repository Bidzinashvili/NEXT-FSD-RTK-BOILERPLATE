import { render, screen } from '@testing-library/react';
import { UserCard } from './UserCard';
import type { User } from 'entities/user/model';

describe('UserCard', () => {
  const mockUser: User = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    website: 'johndoe.com',
  };

  it('renders user information', () => {
    render(<UserCard user={mockUser} />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('123-456-7890')).toBeInTheDocument();
    expect(screen.getByText('johndoe.com')).toBeInTheDocument();
  });

  it('renders with different user data', () => {
    const anotherUser: User = {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '098-765-4321',
      website: 'janesmith.com',
    };

    render(<UserCard user={anotherUser} />);
    
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
  });

  it('renders all required fields', () => {
    const { container } = render(<UserCard user={mockUser} />);
    
    expect(container.textContent).toContain(mockUser.name);
    expect(container.textContent).toContain(mockUser.email);
    expect(container.textContent).toContain(mockUser.phone);
    expect(container.textContent).toContain(mockUser.website);
  });
});
