export interface RecipeResponse{
    uri: string,
    yield: number,
    calories: number,
    totalWeight: number,
    dietLabels: string[],
    healthLabels: string[],
    cautions: string[],
    totalNutrients: {};
    totalDaily: {},
    totalNutrientsKCal: {}
  }
