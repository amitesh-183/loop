import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import Cookies from "js-cookie";

interface UserContextType {
  userLogged: boolean;
  setUserLogged: (value: boolean) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userLogged, setUserLogged] = useState<boolean>(false);

  const token = Cookies.get("token");
  useEffect(() => {
    if (token) {
      setUserLogged(true);
    }
    setUserLogged(false);
  }, [token]);

  return (
    <UserContext.Provider value={{ userLogged, setUserLogged }}>
      {children}
    </UserContext.Provider>
  );
};
export const useAuth = () => useContext(UserContext);
