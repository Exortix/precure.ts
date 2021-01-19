export default abstract class State {
  abstract getName(): string;
  abstract startTransform(): State;
  abstract transform(): State;
  abstract startSkill(): string | void;
}

export abstract class HumanState extends State {
  startTransform(): State {
    console.log("Start! Precure operation");
    console.log("Cure Touch!");
    return this.transform();
  }
  startSkill(): void{}
}

export abstract class PrecureState extends State {
  abstract skill(): string;
  startTransform(): State {
    return this.transform();
  }
  startSkill(): string {
    const skill = this.skill();
    console.log("Element charge!");
    console.log(skill);
    console.log("Take Care!");
    return skill;
  }
}
