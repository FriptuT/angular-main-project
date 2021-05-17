import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();


   private recipes: Recipe[] = [
        new Recipe('Salad Maison', 
        'A super fresh salad - just awesome!', 
        'https://www.cookingclassy.com/wp-content/uploads/2019/11/best-salad-7.jpg',
        [
            new Ingredient("salad", 1),
            new Ingredient("tomatoes", 10)
        ]),
        new Recipe('Spinach Salad', 
        'Just delicious', 
        'https://ifoodreal.com/wp-content/uploads/2018/12/FG-healthy-spinach-salad-recipe.jpg',
        [
            new Ingredient("Eggs", 3),
            new Ingredient("Spinach", 2)
        ]
        )

      ];

      constructor(private slService: ShoppingListService){ }


      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number){
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe); 
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());

      }


      deleteRecipe(index: number){
          this.recipes.splice(index,1);
          this.recipesChanged.next(this.recipes.slice());
      }
}