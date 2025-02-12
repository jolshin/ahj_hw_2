// TODO: write code here

import Goblin from "./Goblin";

const goblin = new Goblin(4)

Goblin.createField();

setInterval(() => Goblin.refreshGrid(), 1000);
