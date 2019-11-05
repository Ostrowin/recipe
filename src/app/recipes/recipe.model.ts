import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, description: string, imgPath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imgPath;
        this.ingredients = ingredients;
    }
}
