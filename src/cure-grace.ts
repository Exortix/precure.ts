import { HumanState, PrecureState } from "./state";

export class Human extends HumanState {
  getName(): string {
    return "Hanadera Nodoka";
  }
  transform(): PrecureState {
    console.log("Two overlapping flowers! Cure Grace!");
    return new CureGrace();
  }
}

export class CureGrace extends PrecureState {
  getName(): string {
    return "Cure Grace";
  }
  transform(): HumanState {
    return new Human();
  }
  skill(): string {
    return "Healing Flower!";
  }
}
