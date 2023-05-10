import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CookieInterceptor implements HttpInterceptor {
	constructor() {}

	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {

		return next.handle(request);
	}
}