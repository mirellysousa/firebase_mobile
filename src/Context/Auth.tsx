import { createContext, PropsWithChildren, useEffect, useState } from "react";
import * as firebase from "firebase/auth";
import { auth } from "../firebaseConfig";

type AuthContextProps = {
  user?: firebase.User | null;
  login: (email: string, password: string) => void;
  register: (email: string, password: string) => void;
  logout: () => void;
  isAuthenticating: boolean;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<firebase.User | null>();
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const login = async (email: string, password: string) => {
    setIsAuthenticating(true);
    try {
      await firebase.signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("Deu ruim", error);
    } finally {
      setIsAuthenticating(false);
    }
  };

  const register = async (email: string, password: string) => {
    setIsAuthenticating(true);
    try {
      await firebase.createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("Deu ruim", error);
    } finally {
      setIsAuthenticating(false);
    }
  };

  const logout = () => {
    firebase.signOut(auth);
  };

  useEffect(() => {
    const subscriber = firebase.onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return subscriber;
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, isAuthenticating }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
