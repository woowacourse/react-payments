import { factory, primaryKey } from "@mswjs/data";

const db = factory({
  card: {
    id: primaryKey(String),
    number: String,
    expirationDate: String,
    cvc: String,
    issuerCode: String,
  },
});

export default db;
