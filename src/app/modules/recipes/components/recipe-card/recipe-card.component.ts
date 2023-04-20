import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-recipe-card',
	templateUrl: './recipe-card.component.html',
	styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

	@Input()
	recipe: any;

	@Input()
	categoryId: number = 0;

	@Input()
	addNew: boolean = false;

	faPlus = faPlus;

	@Output()
	addToCategory = new EventEmitter();

	constructor(
		private apiService: ApiService
	) { }

	ngOnInit(): void {
	}

	addRecipe(name: string, recipe: string, category_id: number) {
		this.apiService.getEndpoint('/recipes', 'post', { name, recipe, category_id }).subscribe((recipe: any) => {
			this.addToCategory.emit(recipe);
		});
	}

}
