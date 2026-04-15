import { createContext, useContext, useState, useEffect } from "react";
import { validateSession, userLogout } from "../api/apiAuthServices";
import userLogin from "../api/apiAuthServices";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Validate session on app mount
  useEffect(() => {
    async function checkValidation() {
      const response = await validateSession();

      const responseData = await response.json();
      if (response.ok && response.status === 200) {
        setIsAuthenticated(responseData.isAuthenticated);
        setUser(responseData.user);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
      setLoading(false);
    }
    checkValidation();
  }, []);

  async function loginUser(input) {
    const response = await userLogin(input.email, input.password);
    const responseData = await response.json();

    if (response.ok && response.status === 200) {
      setUser(responseData.user);
      setIsAuthenticated(responseData.isAuthenticated);
    } else {
      return;
    }
  }

  async function logoutUser() {
    const response = await userLogout();

    if (response.ok) {
      setUser(null);
      setIsAuthenticated(false);
      setLoading(true);
    } else {
      return;
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, loading, loginUser, logoutUser }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuth };
