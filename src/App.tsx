import { CardInfoProvider } from "contexts/CardInfoProvider";
import { CardsProvider } from "contexts/CardsProvider";
import PageRouter from "PageRouter";
import React from "react";

export default function App() {
  return (
    <CardInfoProvider>
      <CardsProvider>
        <PageRouter />
      </CardsProvider>
    </CardInfoProvider>
  );
}
