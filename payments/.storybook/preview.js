import "../src/App.css";
import { CardContext } from "../src/context/CardProvider";
import useCard from "../src/hooks/useCard";
import "../src/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <CardContext.Provide rvalue={useCard()}>
        {Story()}
        <div id="modal"></div>
      </CardContext.Provide>
    );
  },
];
