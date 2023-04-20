import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

	categories: any[] = [];

	constructor(
		private apiService: ApiService
	) { }

	ngOnInit(): void {
		this.apiService.getEndpoint('/categories', 'get', null, { params: { relations: 'recipes' } }).subscribe((categories: any[]) => {
			this.categories = categories;
		});
	}

	addToCategory(recipe: any) {
		const category = this.categories.find(c => c.id == recipe.category_id);
		if (!category) return;
		category.recipes.push(recipe);
	}

}
