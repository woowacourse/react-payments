describe("handler test", () => {
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
    const formData = new FormData();
    formData.append("cardNumber", "1234");
    const response = await fetch("https://api.antolibank.com/cards", {
      method: "POST",
      body: formData,
    });

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      status: 201,
      message: "create!",
    });
  });
});
