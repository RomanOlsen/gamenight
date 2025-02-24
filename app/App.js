import { playersController } from './controllers/Controller.js';

class App {

  playersController = new playersController() // ☑️ you can remove this - example only

}

window['app'] = new App()


