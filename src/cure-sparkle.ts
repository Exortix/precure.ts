import { HumanState, PrecureState } from "./state";

export class Human extends HumanState {
  getName(): string {
    return "Hiramitsu Hinata";
  }
  transform(): PrecureState {
    console.log("Two lights that melt together! Cure Sparkle!");
    return new CureSparkle();
  }
}

export class CureSparkle extends PrecureState {
  getName(): string {
    return "Cure Sparkle";
  }
  transform(): HumanState {
    return new Human();
  }
  skill(): string {
    return "Healing Flash!";
  }
}
