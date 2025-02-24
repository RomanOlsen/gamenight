import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Player.js').Example[]} */
  examples = []

  characters = [
    new Character('jerms', '🎅', 10, 'delivery dude'),
    new Character('mick', '👮‍♂️', 1000, 'strongest meter maid'),
    new Character('jake', '🫅', 10000, 'code emperor'),
    new Character('sam', '🧘‍♀️', 8, 'stretchy'),
    new Character('frank', '🐈‍⬛', 9, 'unemployed'),
  ]

}

export const AppState = createObservableProxy(new ObservableAppState())