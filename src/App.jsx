import "./App.css";
import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./page/Login/LoginPage";
import ListServer from "./page/ListServer/ListServer";
import { AuthProvider } from "./context/authContext";
import { Toaster } from "react-hot-toast";
import LogSystem from "./page/LogSystem/LogSystem";
import Layout from "./components/Layout/Layout";
import Home from "./page/Home/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeContext } from "./context/themeContext";

const queryClient = new QueryClient();

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme}`}>
      <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route element={<Layout />}>
            <Route exact path="/" element={<Home />} />
            <Route path="log" element={<LogSystem />} />
            <Route path="servers" element={<ListServer />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </QueryClientProvider>
    </div>
  );
}

export default App;
