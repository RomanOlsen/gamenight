// NOTE a class is blueprint for an object, which details out the properties/methods that should exist on the class
export class Player {
  // NOTE must supply 4 arguments when constructing a Character class (newing up)
  constructor(PlayerName) {
    this.name = PlayerName

  }
  // NOTE properties that exist on a character object (key:value pairs). The constructor will assign value to these properties
  name = ''
  score = 0

  // NOTE an interpretation of what our object should display as in the View (DOM)
  get cardHTMLTemplate() {
    // NOTE if you are passing a string value as an argument in your html template, make sure you put '' around the value
    // NOTE can add /*html*/ before the string so that VS Code renders the string like HTML, but is totally optional
    return /*html*/`
    <div class="col-md-4">
      <div class="bg-light shadow text-center p-4 mb-3">
      
      <p class="fs-2">${this.name}</p>
      <p class="fs-2">${this.score}</p>

      <button onclick="app.charactersController.changeScore('${this.name}', ${-1})" class="btn btn-danger" type="button">
        -
      </button>
      <button onclick="app.charactersController.changeScore('${this.name}', ${1})" class="btn btn-success" type="button">
        +
      </button>
      </div>
    </div>
    `
  }

}