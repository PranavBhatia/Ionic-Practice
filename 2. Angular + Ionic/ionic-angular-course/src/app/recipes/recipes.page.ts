import {Component, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.page.html',
    styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
    recipes: Recipe[] = [
        {
            id: 'r1',
            title: 'Schnitzel',
            imageUrl: 'https://assets.bonappetit.com/photos/57ae1afd53e63daf11a4e26f/2:1/w_880,c_limit/chicken-schnitzel.jpg?mbid=social_retweet',
            ingredients: ['French fries', 'Chicken', 'Salad']
        },
        {
            id: 'r1',
            title: 'Spaghetti',
            imageUrl: 'https://www.errenskitchen.com/wp-content/uploads/2015/02/Quick-Easy-Spaghetti-Bolognese2-1.jpg',
            ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
        }
    ];
    constructor() {
    }

    ngOnInit() {
    }

}
