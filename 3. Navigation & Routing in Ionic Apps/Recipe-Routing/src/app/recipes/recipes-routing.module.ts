import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecipesPage} from './recipes.page';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: RecipesPage
            },
            {
                path: ':recipeId',
                loadChildren: () => import('./recipe-detail/recipe-detail.module').then(m => m.RecipeDetailPageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RecipesPageRoutingModule {
}
