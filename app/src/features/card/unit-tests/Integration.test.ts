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
});
