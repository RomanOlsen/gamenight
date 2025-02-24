import { Player } from './models/Player.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  defaultPlayers = [
    new Player('Roman'),
    new Player('mick'),
    new Player('jeremy'),
    new Player('jake'),

  ]

}

export const AppState = createObservableProxy(new ObservableAppState())