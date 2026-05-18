const FIXED_UUID = "123-123-123-123-123";

describe("handler test", () => {
  beforeAll(() => {
    jest.spyOn(crypto, "randomUUID").mockReturnValue(FIXED_UUID);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("get user", async () => {
    const response = await fetch("https://api.example.com/user");

    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(await response.json()).toEqual({
      firstName: "John",
      lastName: "Maverick",
    });
  });

  test("create card", async () => {
    const body = JSON.stringify({
      number: "4321432143214321",
      expirationDate: "12/28",
      cvc: "777",
      issuerCode: "31",
    });
    const response = await fetch("https://api.antolibank.com/cards", {
      method: "POST",
      body: body,
    });
    expect(response.status).toBe(201);
    expect(await response.json()).toEqual({
      id: FIXED_UUID,
    });
  });
});
