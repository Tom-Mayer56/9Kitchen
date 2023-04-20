import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class JwtInterceptor implements HttpInterceptor {

	constructor(
        private authService: AuthService
    ) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.includes(`${environment.sanctumEndpoint}`)) return next.handle(request);

		const headers = new HttpHeaders({
    	    'X-XSRF-TOKEN': this.getCookie('XSRF-TOKEN'),
            'Authorization': 'Bearer ' + this.authService.token
        });

		request = request.clone({headers, withCredentials: true});
		return next.handle(request);
	}

    getCookie(name: string) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        return parts.pop()?.split(';').shift() ?? '';
    }
}
