import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { BackService } from '../services/back.service';

import { Store } from '@ngrx/store';
import { IAppState } from '../store/states/app.state';
import { IError } from '../store/states/is-error.state';
import { IUsersession } from '../store/states/user-session.state';
import { CallsBack } from '../utils/calls-back';
import { IJwtInfo } from '../interfaces/filters.interface';
import {
	LoadUserSessionSuccess,
	LoadUserSessionFailed,
} from '../store/actions/euser-session.action';

@Injectable({
	providedIn: 'root',
})
export class LoginGuard implements CanActivate {
	constructor(
		private router: Router,
		private backService: BackService,
		private _store: Store<IAppState>
	) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		this._store
			.select((state) => state.userSession)
			.subscribe((response: IUsersession | any) => {
				const r: IError = response;
				if (r.isError || response.nick === '') {
					const jwtCookie = sessionStorage.getItem('jwt');
					if (jwtCookie) {
						this.backService.logInCheck(jwtCookie).subscribe(
							(info: IJwtInfo) => {
								const user: IUsersession = {
									jwt: jwtCookie,
									nick: info.nick,
									role: info.role,
								};
								this._store.dispatch(new LoadUserSessionSuccess(user));
								return true;
							},
							() => {
								this.router.navigate(['/']);
								return false;
							}
						);
					}
					this.router.navigate(['/']);
					return false;
				} else {
					return true;
				}
			});
		return true;
	}
}
