import { http, HttpResponse } from "msw";

type CardBody = {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
};

type Card = CardBody & { id: string };

const cardStore: Card[] = [];

export const handlers = [

];
