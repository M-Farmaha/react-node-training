import styled from "styled-components";

export const ErrorWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorTitle = styled.p`
  font-weight: 700;
  font-size: 50px;
  color: var(--accent-color);

  transition: var(--main-transition);
`;
