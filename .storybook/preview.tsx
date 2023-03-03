import React from "react";
import styled from "styled-components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const GlobalContainer = styled("div")`
  height: 100vh;
  width: 100vw;
  display: flex;
  place-items: center;
  place-content: center;
`;

export const decorators = [
  (Story) => <GlobalContainer>{Story()}</GlobalContainer>,
];
