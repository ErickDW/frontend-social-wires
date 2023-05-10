import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { IMessage, IMessageRes } from '../store/states/message.state';
import {
	IFilters,
	IJwtInfo,
	ILogIn,
	IRegister,
	IUserCheck,
} from '../interfaces/filters.interface';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class BackService {
	private endpoint: string = environment.apiEndPoint;
	private url: string = environment.urlServices;

	private http = inject(HttpClient);

	getHeader = (authJwt? : string) => {
		return new HttpHeaders({
			['Content-Type']: 'application/json',
			['Content-Encoding']: 'gzip, deflate, br',
			['auth']: 'ABC123',
			['access-control-allow-headers']: '*',
			['Authorization']: `Bearer ${(authJwt? authJwt : '')}`,


		});
	};

	filterCharacterAllMessages(data?: IFilters): Observable<IMessage[]> {
		let APISearch = `${this.url}/messages`;
		if (data) {
			const { nick, title, day } = data;
			let qury = '?';
			if (nick) {
				qury += `nick=${nick}&`;
			}
			if (title) {
				qury += `title=${title}&`;
			}
			if (day) {
				qury += `day=${day}&`;
			}
			APISearch += qury;
		}

		const res = this.http.get<IMessage[]>(APISearch);
		return res;
	}

	logInCheck(jwt: string): Observable<IJwtInfo> {
		sessionStorage.setItem('jwt', jwt);
		let APISearch = `${this.url}/auth/user`;
		return this.http.get<IJwtInfo>(APISearch, {
			headers: this.getHeader(jwt),
			withCredentials: true
		});
	}

	logIn(logInbody: ILogIn): Observable<IUserCheck> {

		let APISearch = `${this.url}/auth/login`;
		return this.http.post<IUserCheck>(APISearch, JSON.stringify(logInbody), {
			headers: this.getHeader(),
			withCredentials: true
		});
	}

	logOut(jwt: string): Observable<any> {
		sessionStorage.setItem('jwt', jwt);
		let APISearch = `${this.url}/auth/logout`;
		return this.http.post<any>(APISearch, JSON.stringify({}),{
			headers: this.getHeader(jwt),
			withCredentials: true
		});
	}

	register(reg: IRegister): Observable<IRegister> {
		let APISearch = `${this.url}/users`;
		return this.http.post<IRegister>(APISearch, JSON.stringify(reg),{
			headers: this.getHeader(),
			withCredentials: true
		});
	}

	createMessage(mgs: IMessage): Observable<IMessageRes> {
		let APISearch = `${this.url}/messages`;
		const jwtCookie = sessionStorage.getItem('jwt');
		return this.http.post<IMessageRes>(APISearch, JSON.stringify(mgs),{
			headers: this.getHeader(jwtCookie),
			withCredentials: true
		});
	}

}
