import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecipesService} from "../recipes.service";
import {Recipe} from "../recipe.model";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  recipe: Recipe;

  constructor(
      private activatedRoute: ActivatedRoute,
      private recipesService: RecipesService,
      private router: Router,
      private alertController: AlertController
  ) {
  }

  ngOnInit() {
    console.log('In RecipeDetailPage ngOnInit');
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        this.router.navigate(['/recipes']).then();
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.recipe = this.recipesService.getRecipe(recipeId);
    });
  }

  ionViewWillEnter() {
    console.log('In RecipeDetailPage ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('In RecipeDetailPage ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('In RecipeDetailPage ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('In RecipeDetailPage ionViewDidLeave');
  }

  onDeleteRecipe() {
    this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete this recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipesService.deleteRecipe(this.recipe.id);
            this.router.navigate(['/recipes']).then();
          }
        }
      ]
    }).then(alertElement => alertElement.present());
  }

  ngOnDestroy(): void {
    console.log('In RecipeDetailPage ngOnDestroy');
  }
}
