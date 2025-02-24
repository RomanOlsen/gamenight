// NOTE a class is blueprint for an object, which details out the properties/methods that should exist on the class
export class Player {
  // NOTE must supply 4 arguments when constructing a Character class (newing up)
  constructor(PlayerName) {
    this.name = PlayerName

  }
  // NOTE properties that exist on a character object (key:value pairs). The constructor will assign value to these properties
  name = ''
  score = 0

}