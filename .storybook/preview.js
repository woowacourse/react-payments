import React from "react";
import "./globalStyle.css";

const customViewports = {
  appS: {
    name: "appS",
    styles: {
      width: "290px",
      height: "963px",
    },
  },
  appM: {
    name: "appM",
    styles: {
      width: "350px",
      height: "963px",
    },
  },
  appL: {
    name: "appL:",
    styles: {
      width: "500px",
      height: "963px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
};
