import Precure from "../src/precure";
import { expect } from "chai";
import "mocha";

describe("Cure Sparkle", () => {
  const sparkle: Precure = Precure.createCureSparkle();

  it("Before transformation", () => {
    expect(sparkle.getName()).to.equal("Hiramitsu Hinata");
    expect(sparkle.skill()).to.equal(undefined);
  });

  it("After transformation", () => {
    sparkle.transform();
    expect(sparkle.getName()).to.equal("Cure Sparkle");
    expect(sparkle.skill()).to.equal("Healing Flash!");
  });
});
