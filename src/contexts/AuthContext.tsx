import { createContext, useContext, useState, ReactNode } from 'react';

// Define user type
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

// Define context type
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string, phone?: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => false,
  register: async () => false,
  logout: () => {},
  isAuthenticated: false,
});

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    // Check if user data exists in localStorage
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isAuthenticated = !!user;

  // Mock login function - in a real app, this would call an API
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, any non-empty email/password combination works
      if (email && password) {
        const newUser = {
          id: '1',
          name: email.split('@')[0], // Use part of email as name
          email,
        };
        
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  // Mock register function
  const register = async (name: string, email: string, password: string, phone?: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (name && email && password) {
        const newUser: User = {
          id: '1',
          name,
          email,
          phone,
        };
        
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};