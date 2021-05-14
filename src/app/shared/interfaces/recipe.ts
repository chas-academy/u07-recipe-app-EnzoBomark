export interface Recipe{
  id: number,
  readyInMinutes: number,
  title: string,
  image: string,
  vegan: boolean,
  vegetarian: boolean,
  glutenFree: boolean,
  lowFodmap: boolean,
  extendedIngredients: [{
    originalString: string,
  }]
  analyzedInstructions: [{
    steps: [{
      number: number,
      step: string,
    }]
  }],
}
