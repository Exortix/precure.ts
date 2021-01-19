import Precure from "../src/precure";
import { expect } from "chai";
import "mocha";

describe("Precure", () => {
  it("Get all precure", () => {
    const precures: Array<Precure> = Precure.getPrecures();
    expect(precures.length).to.equal(3);

    const expectedNames: Array<string> = [
      "Hanadera Nodoka",
      "Sawaizumi Chiyu",
      "Hiramitsu Hinata"
    ];
    precures.forEach((precure, i) => {
      expect(precure.getName()).to.equal(expectedNames[i]);
    });
  });
});
