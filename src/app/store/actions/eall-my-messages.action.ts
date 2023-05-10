import { Action } from '@ngrx/store';
import { IMessage } from '../states/message.state';
import { IError } from '../states/is-error.state';

export enum EAllMyMessages {
	LOAD_MYMESSAGES_SUCCESS = '[AllMyMessages] get AllMessages Success',
	LOAD_MYMESSAGES_FAIL = '[AllMyMessages] get AllMessages Failed',
}

export class LoadAllMyMessagesSuccess implements Action {
	readonly type = EAllMyMessages.LOAD_MYMESSAGES_SUCCESS;
	constructor(public payload: IMessage[] | any) {}
}

export class LoadAllMyMessagesFailed implements Action {
	readonly type = EAllMyMessages.LOAD_MYMESSAGES_FAIL;
	constructor(public payload: IError | any) {}
}

export type AllMyMessagesActions = LoadAllMyMessagesSuccess | LoadAllMyMessagesFailed;
