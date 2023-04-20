import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

	loginState: 'login' | 'register' = 'login';

	constructor(
		private authService: AuthService,
		private router: Router
	) { }

	ngOnInit(): void {
	}

	login(email: string, password: string) {
		this.authService.login(email, password, () => {
			this.router.navigate(['/']);
		}, (message: string) => {
			
		});
	}

	register(email: string, password: string, repassword: string) {
		this.authService.register(email, password, repassword, () => {
			this.router.navigate(['/']);
		}, (message: string) => {
			
		});
	}
}
