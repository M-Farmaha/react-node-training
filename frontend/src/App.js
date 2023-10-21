import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout/Layout";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { StartPage } from "./pages/StartPage/StartPage";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StartPage />} />

          <Route path="deals" element={<h1>DEALS</h1>} />

          <Route path="login" element={<h1>LOGIN</h1>} />

          <Route path="register" element={<h1>REGISTER</h1>} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
