import { IStyledComponent } from "styled-components";
import { FastOmit } from "styled-components/dist/types";

export type StyledComponent = IStyledComponent<
  "web",
  FastOmit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    never
  >
>;
