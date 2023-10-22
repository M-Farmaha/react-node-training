import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout/Layout";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { StartPage } from "./pages/StartPage/StartPage";
import { AuthPage } from "./pages/AuthPage/AuthPage";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StartPage />} />

          <Route path="deals" element={<h1>DEALS</h1>} />

          <Route path="login" element={<AuthPage />} />

          <Route path="register" element={<AuthPage />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
