import birdsData from "./data/dataBirds";
import { BIRDS_COUNT } from "./constants";

export const getRandomBird = (group) =>
  birdsData[group][Math.floor(Math.random() * (BIRDS_COUNT + 1))];
