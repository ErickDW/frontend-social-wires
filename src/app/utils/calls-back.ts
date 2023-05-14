import { Store } from '@ngrx/store';

import { BackService } from '../services/back.service';
import { IMessage } from '../store/states/message.state';
import { IError } from '../store/states/is-error.state';
import { IAppState } from '../store/states/app.state';
import {
	IFilters,
	IJwtInfo,
	ILogIn,
	IRegister,
	IUserCheck,
} from '../interfaces/filters.interface';
import {
	LoadUserSessionSuccess,
	LoadUserSessionFailed,
} from '../store/actions/euser-session.action';
import { IUsersession } from '../store/states/user-session.state';
import {
	LoadAllMyMessagesFailed,
	LoadAllMyMessagesSuccess,
} from '../store/actions/eall-my-messages.action';
import {
	LoadNewMessagesFalse,
	LoadNewMessagesTrue,
} from '../store/actions/enew-messages.action';
import {
	LoadAllMessagesFailed,
	LoadAllMessagesSuccess,
} from '../store/actions/eall-messages.action';

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

	callBackRegister(res: IRegister) {
		this.backService.register(res).subscribe(
			(register) => {
				this.callBackLogIn({
					email: register.email,
					password: res.password,
				});
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

	callBackCreateMessage(msg: IMessage) {
		this.backService.createMessage(msg).subscribe(
			(register) => {
				if (register.not === 'Message create') {
					this.callBackAllMesaagesFilter();
					alert('Message sent succesfully');
				}
			},
			(e) => {
				alert('Error creating message, try again');
			}
		);
	}

	callBackAllMyMesaagesDateFilter(data?: IFilters) {
		this.backService.filterCharacterAllMessages(data).subscribe(
			(res: IMessage[]) => {
				if (res) {
					this._store.dispatch(new LoadAllMyMessagesSuccess(res));
				}
			},
			(e) => {
				this._store.dispatch(
					new LoadAllMyMessagesFailed({
						messageError: e,
						isError: true,
					})
				);
			}
		);
	}

	callBackAllNewMessages() {
		this._store
			.select((state) => state.currentAllMessages)
			.subscribe((response: IMessage[] | any) => {
				const r: IError = response;
				if (r.isError) {
					return;
				} else {
					if (response) {
						this.compareMessages(response);
					}
				}
			});
	}

	compareMessages(messages: IMessage[]) {
		this.backService
			.filterCharacterAllMessages()
			.subscribe((res: IMessage[]) => {
				if (res) {
					if (res.length > messages.length) {
						const change = res.length - messages.length;
						this._store.dispatch(
							new LoadNewMessagesTrue({
								newMessages: true,
								dataMessages: res,
								change: change,
							})
						);
					} else {
						this._store.dispatch(
							new LoadNewMessagesFalse({
								newMessages: false,
							})
						);
					}
				}
			});
	}
}
