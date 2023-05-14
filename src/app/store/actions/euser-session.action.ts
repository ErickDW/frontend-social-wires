import { Action } from '@ngrx/store';
import { IError } from '../states/is-error.state';
import { IUsersession } from '../states/user-session.state';

export enum EUserSession {
	LOAD_USERSESSION_SUCCESS = '[UserSession] get UserSession Success',
	LOAD_USERSESSION_FAIL = '[UserSession] get UserSession Failed',
}

export class LoadUserSessionSuccess implements Action {
	readonly type = EUserSession.LOAD_USERSESSION_SUCCESS;
	constructor(public payload: IUsersession[] | any) {}
}

export class LoadUserSessionFailed implements Action {
	readonly type = EUserSession.LOAD_USERSESSION_FAIL;
	constructor(public payload: IError | any) {}
}

export type UserSessionActions = LoadUserSessionSuccess | LoadUserSessionFailed;
