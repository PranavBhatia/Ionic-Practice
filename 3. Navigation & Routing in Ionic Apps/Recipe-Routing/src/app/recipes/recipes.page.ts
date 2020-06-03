import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipesService} from "./recipes.service";

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.page.html',
    styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
    recipes: Recipe[];

    constructor(private recipesService: RecipesService) {
    }

    ngOnInit() {
        console.log('In RecipesPage ngOnInit');
    }

    ionViewWillEnter() {
        this.recipes = this.recipesService.getAllRecipes();
        console.log('In RecipesPage ionViewWillEnter');
    }

    ionViewDidEnter() {
        console.log('In RecipesPage ionViewDidEnter');
    }

    ionViewWillLeave() {
        console.log('In RecipesPage ionViewWillLeave');
    }

    ionViewDidLeave() {
        console.log('In RecipesPage ionViewDidLeave');
    }

    ngOnDestroy(): void {
        console.log('In RecipesPage ngOnDestroy');
    }
}
