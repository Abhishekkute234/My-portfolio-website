import React, { createContext, useContext, useEffect, useState } from 'react';
import { Models, ID, OAuthProvider } from 'appwrite';
import { account } from '@/lib/appwrite';

interface AuthContextType {
  user: Models.User<any> | null;
  loading: boolean;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  signupWithEmail: (email: string, password: string, name?: string) => Promise<void>;
  loginWithOAuth: (provider: 'google' | 'github' | 'discord') => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Models.User<any> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const refreshUser = async () => {
    try {
      const currentUser = await account.get();
      setUser(currentUser);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const loginWithEmail = async (email: string, password: string) => {
    setLoading(true);
    try {
      await account.createEmailPasswordSession(email, password);
      await refreshUser();
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const signupWithEmail = async (email: string, password: string, name?: string) => {
    setLoading(true);
    try {
      // Create user account
      await account.create(ID.unique(), email, password, name);
      // Automatically login user
      await account.createEmailPasswordSession(email, password);
      await refreshUser();
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const loginWithOAuth = async (provider: 'google' | 'github' | 'discord') => {
    try {
      const redirectUrl = `${window.location.origin}/auth/callback`;
      const failureUrl = `${window.location.origin}/login`;
      
      let appwriteProvider: OAuthProvider;
      if (provider === 'google') {
        appwriteProvider = OAuthProvider.Google;
      } else if (provider === 'github') {
        appwriteProvider = OAuthProvider.Github;
      } else if (provider === 'discord') {
        appwriteProvider = OAuthProvider.Discord;
      } else {
        throw new Error(`Unsupported OAuth provider: ${provider}`);
      }

      await account.createOAuth2Session(appwriteProvider, redirectUrl, failureUrl);
    } catch (error) {
      console.error(`${provider} OAuth login failed:`, error);
      throw error;
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await account.deleteSession('current');
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        loginWithEmail,
        signupWithEmail,
        loginWithOAuth,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
