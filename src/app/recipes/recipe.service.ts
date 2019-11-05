import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

/*     private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 'A super-tasty Schnitzel - just awesome',
        'http://www.recipetineats.com/wp-content/uploads/2017/08/Schnitzel-3-landscape.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Big Fat Burger', 'What else you need to say?',
        // tslint:disable-next-line:max-line-length
        'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.delicious.com.au%2FgcYvP96l%2Fw1200%2Fdel%2F2016%2F10%2Fjamie-olivers-aussie-style-burger-37334-3.jpg&f=1&nofb=1',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
      ]; */

      private recipes: Recipe[] = [];

    constructor(private slService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
