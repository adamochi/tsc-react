// you can constrain a type to be a specific value

import { template } from "@babel/core";

type Team = "red" | "blue" | "green";
type Health = "poor" | "good" | "unknown";
type Rating = 1 | 2 | 3 | 4 | 5;

// interface instead of type = {
// interface is only used for one purpose
// which is to explain to TypeScript the shape of an object
interface User {
  name: string;
  nickname: string;
}
interface Player extends User {
  team: Team;
  rating: Rating;
  health: Health;
}

const adamochi: Player = {
  name: "Adam Sullivan",
  nickname: "adamochi",
  team: "green",
  health: "good",
  rating: 3,
};
console.log(adamochi);
// You can also stack interfaces of the same name
interface Potato {
  what: string;
}
interface Potato {
  where: string;
}
interface Potato {
  taste: string;
}
const potato: Potato = {
  what: "vegetable",
  where: "garden",
  taste: "bland but good",
};
console.log(potato);
