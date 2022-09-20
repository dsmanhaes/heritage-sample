abstract class Animal {
  public name: string;
  public lifeTime: number;
  public size: number;
  public weight: number;

  constructor (name: string, lifeTime: number, size: number, weight: number) {
    this.name = name;
    this.lifeTime = lifeTime;
    this.size = size;
    this.weight = weight;
  }
}

export { Animal };
