import { Duck } from "./Duck";
import { ICanFly } from "./ICanFly";

const duck = new Duck('Patolino', 3, 50, 2, true, 'preto c/ verde');

function takeOff (animal: ICanFly) {
  animal.fly();
}

takeOff(duck);
