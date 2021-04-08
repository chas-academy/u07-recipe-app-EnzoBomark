export class GlobalConstants {
  public static API_KEY: string = "&apiKey=af8b57deb431483a809745ca9fc5bb82";
  // public static API_KEY: string = "&apiKey=2aa766df0ba94b729117db5d5f4fa99e";

  public static TYPE: Array<string> = [
    'Side dish',
    'Dessert',
    'Appetizer',
    'Salad',
    'Breakfast',
    'Soup',
    'Snack',
    'Drink',
  ];

  public static INTOLERANCES: Array<string> = [
    'Dairy',
    'Egg',
    'Gluten',
    'Peanuts',
    'Seafood',
    'Shellfish',
    'Tree nuts',
  ];

  public static CUISINE: Array<string> = [
    'American',
    'British',
    'Chinese',
    'French',
    'German',
    'Greek',
    'Indian',
    'Italian',
    'Mexican',
    'Thai',
    'Vietnamese',
  ];

  public static DIET: Array<string> = [
    'Gluten free',
    'Vegetarian',
    'Vegan',
    'Pescetarian',
  ];
}
