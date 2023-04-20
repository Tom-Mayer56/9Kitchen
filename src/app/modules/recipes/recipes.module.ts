import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
	declarations: [
		RecipesComponent,
		RecipeCardComponent
	],
	imports: [
		CommonModule,
		RecipesRoutingModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		FontAwesomeModule
	]
})
export class RecipesModule { }
