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
    formData.append("cardNumber", "4321432143214321");
    formData.append("cardBrand", "kakao");
    formData.append("cardExpiryDate", "1228");
    formData.append("cardCVC", "777");
    formData.append("cardPassword", "77");
    const response = await fetch("https://api.antolibank.com/cards", {
      method: "POST",
      body: formData,
    });
    expect(response.status).toBe(201);
    expect(await response.json()).toEqual({
      message: "카드 생성!",
    });
  });
});
