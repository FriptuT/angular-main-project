import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

   private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getIngredients(){
         return this.ingredients = this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
      }


      addIngredients(ingredients: Ingredient[]){
    //    for(let ingredient of ingredients){
    //        this.addIngredient(ingredient);
    //    }
        this.ingredients.push(...ingredients);


      }


}