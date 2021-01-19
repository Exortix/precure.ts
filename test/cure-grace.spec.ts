import Precure from "../src/precure";
import { expect } from "chai";
import "mocha";

describe("Cure Grace", () => {
  const grace: Precure = Precure.createCureGrace();

  it("Before transformation", () => {
    expect(grace.getName()).to.equal("Hanadera Nodoka");
    expect(grace.skill()).to.equal(undefined);
  });

  it("After transformation", () => {
    grace.transform();
    expect(grace.getName()).to.equal("Cure Grace");
    expect(grace.skill()).to.equal("Healing Flower!");
  });
});
