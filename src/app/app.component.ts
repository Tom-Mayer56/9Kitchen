import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { faSignOutAlt, faBook } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'labs-FE';

	faSignOutAlt = faSignOutAlt;
	faBook = faBook;

	constructor(
		private apiService: ApiService,
		public router: Router,
		public authService: AuthService
	) {
		this.apiService.getCsrfToken().subscribe(() => {});
	}

	logout() {
		this.authService.token = undefined;
		this.router.navigate(['/login']);
	}
}
