import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";

class PlayersService {
  addMessage(message) {
    const example = new Example(message)
    AppState.examples.push(example)
  }
}

export const playerService = new Player()