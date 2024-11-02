import supertest from "supertest";

import { serverApp } from "../utils/serverApp";

describe("testing my default endpoint", () => {
  test("get `/`", () => {
    let result = supertest(serverApp).get("/");

    console.log(result);

    // expect(result).toHaveBeenCalled();
    // expect(result).toBeTruthy();
    expect(result).not.toBeNull();
    expect(result.method).toBe("GET");
  });
});
