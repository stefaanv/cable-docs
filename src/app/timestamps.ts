export class Timestamps {
  public readonly createdAt?: Date = undefined;
  public readonly updatedAt?: Date = undefined;
  public readonly available: boolean = false;

  constructor(model: { createdAt?: Date; updatedAt?: Date }) {
    if (model.createdAt) {
      this.createdAt = model.createdAt;
      this.updatedAt = model.updatedAt;
      this.available = true;
    }
  }
}
