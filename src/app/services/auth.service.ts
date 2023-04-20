import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	token?: string;

	constructor(
		private apiService: ApiService
	) {}

	login(email: string, password: string, successCallback: () => any, errorCallback: (message: string) => any) {
		this.apiService.getEndpoint('/auth/login', 'post', { email, password }).subscribe((token: any) => {
			this.token = token.success;
			if (successCallback) successCallback();
		}, (error: any) => {
			if (errorCallback) errorCallback(error.message);
		});
	}

	register(email: string, password: string, repassword: string, successCallback: () => any, errorCallback: (message: string) => any) {
		this.apiService.getEndpoint('/auth/register', 'post', { email, password, repassword }).subscribe((token: any) => {
			this.token = token.success;
			if (successCallback) successCallback();
		}, (error: any) => {
			if (errorCallback) errorCallback(error.message);
		});
	}

}
