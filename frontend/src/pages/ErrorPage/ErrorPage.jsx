import { ErrorTitle, ErrorWrap } from "./ErrorPage-styled";

export const ErrorPage = () => {
  return (
    <ErrorWrap>
      <ErrorTitle>Error 404</ErrorTitle>
      <p>Wrong path. Nothing exists for your request</p>
    </ErrorWrap>
  );
};
