import Precure from "../src/precure";
import { expect } from "chai";
import "mocha";

describe("Cure Fontaine", () => {
  const fontaine: Precure = Precure.createCureFontaine();

  it("Before transformation", () => {
    expect(fontaine.getName()).to.equal("Sawaizumi Chiyu");
    expect(fontaine.skill()).to.equal(undefined);
  });

  it("After transformation", () => {
    fontaine.transform();
    expect(fontaine.getName()).to.equal("Cure Fontaine");
    expect(fontaine.skill()).to.equal("Healing Stream!");
  });
});
