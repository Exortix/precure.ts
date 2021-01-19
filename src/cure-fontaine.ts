import { HumanState, PrecureState } from "./state";

export class Human extends HumanState {
  getName(): string {
    return "Sawaizumi Chiyu";
  }
  transform(): PrecureState {
    console.log("Two streams that intersect! Cure Fontaine!");
    return new CureFontaine();
  }
}

export class CureFontaine extends PrecureState {
  getName(): string {
    return "Cure Fontaine";
  }
  transform(): HumanState {
    return new Human();
  }
  skill(): string {
    return "Healing Stream!";
  }
}
