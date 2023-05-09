import { BackService } from '../services/back.service';
import {
	LoadAllMessagesFailed,
	LoadAllMessagesSuccess,
} from '../store/actions/eall-messages.action';
import { IMessage } from '../store/states/message.state';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/states/app.state';
import {
	IFilters,
	IJwtInfo,
	ILogIn,
	IUserCheck,
} from '../interfaces/filters.interface';
import {
	LoadUserSessionSuccess,
	LoadUserSessionFailed,
} from '../store/actions/euser-session.action';
import { IUsersession } from '../store/states/user-session.state';
import { Observable } from 'rxjs';

export class CallsBack {
	constructor(
		private _store: Store<IAppState>,
		private backService: BackService
	) {}

	callBackAllMesaagesFilter(data?: IFilters) {
		this.backService.filterCharacterAllMessages(data).subscribe(
			(res: IMessage[]) => {
				if (res) {
					this._store.dispatch(new LoadAllMessagesSuccess(res));
				}
			},
			(e) => {
				this._store.dispatch(
					new LoadAllMessagesFailed({
						messageError: e,
						isError: true,
					})
				);
			}
		);
	}

	callBackLogIn(data: ILogIn) {
		this.backService.logIn(data).subscribe(
			(res: IUserCheck) => {
				if (res.message === 'Succes') {
					this.callBackCheckUser(res);
				}
			},
			(e) => {
				this._store.dispatch(
					new LoadUserSessionFailed({
						messageError: e,
						isError: true,
						moreInfo: 'Username or password error',
					})
				);
			}
		);
	}

	callBackCheckUser(res: IUserCheck) {
		this.backService.logInCheck(res.jwt).subscribe(
			(info: IJwtInfo) => {
				const user: IUsersession = {
					jwt: res.jwt,
					nick: info.nick,
					role: info.role,
				};
				this._store.dispatch(new LoadUserSessionSuccess(user));
			},
			(e) => {
				this._store.dispatch(
					new LoadUserSessionFailed({
						messageError: e,
						isError: true,
						moreInfo: 'Server error, please try again later',
					})
				);
			}
		);
	}
}
