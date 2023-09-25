// jest.mock('./http');

const { loadTitle } = require("./async-mock-util");

test("should print an uppercase text", () => {
  loadTitle().then((title) => {
    expect(title).toBe("DELECTUS AUT AUTEM");
  });
});
