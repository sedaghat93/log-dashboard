import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useReducer,
} from "react";
import { login } from "../utilies/login";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const initialState = {
  logErrors: [],
  listOfErrors:[],
  isLoading: false,
  isError: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        logErrors: action.payload,
      };
      case "FETCH_SERVER_SUCCESS":
        return {
          ...state,
          isLoading: false,
          listOfErrors: action.payload,
        };
    case "FETCH_FAILURE":
      return { ...state, isLoading: false, isError: true };
    default:
      throw new Error("Invalid action type");
  }
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogin = async (username, password) => {
    try {
      const token = await login(username, password);
      localStorage.setItem("token", token);
      setToken(token);
      toast.success("شما با موفقیت وارد شوید");
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        login: handleLogin,
        logout: handleLogout,
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
