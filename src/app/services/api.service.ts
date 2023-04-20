import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(
		private httpService: HttpService
	) { }

	getEndpoint(endpoint: string, method: 'get' | 'post' | 'delete', data: any = {}, params: any = {}) {
		return this.httpService[method](`${environment.apiUrl}/api${endpoint}`, method == 'get' ? params : data, params);
	}

	getCsrfToken() {
		return this.httpService['get'](`${environment.apiUrl}${environment.sanctumEndpoint}`, { withCredentials: true });
	}

}
